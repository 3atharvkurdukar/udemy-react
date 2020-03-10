import React, { Component } from 'react'

import axios from '../../../my-axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

export class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 5);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Atharv'
                }
            });
            this.setState({
                posts: updatedPosts
            });
        }).catch((error) => {
            this.setState({
                error: true
            });
        });
    }

    postSelectedHandler = (post_id) => {
        this.setState({
            selectedPostId: post_id
        });
    }

    render() {
        const posts = this.state.posts.map((post) => (
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
        ));
        return (
            <section className={classes.Posts}>
                {this.state.error ? <p style={{ textAlign: 'center' }}>Something went wrong!</p> : posts}
            </section>
        )
    }
}

export default Posts
