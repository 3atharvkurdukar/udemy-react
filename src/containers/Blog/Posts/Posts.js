import React, { Component } from 'react'
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import axios from '../../../my-axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import FullPost from '../FullPost/FullPost';

export class Posts extends Component {
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        // console.log(this.props);
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
        this.props.history.push({ pathname: '/posts/' + post_id });
    }

    render() {
        const posts = this.state.posts.map((post) => (
            // <Link to={'/posts/' + post.id} key={post.id}>
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
            // </Link>
        ));
        return (
            <div>
                <section className={classes.Posts}>
                    {this.state.error ? <p style={{ textAlign: 'center' }}>Something went wrong!</p> : posts}
                </section>
                <Route exact path={this.props.match.url + '/:id'} component={FullPost} />
            </div>
        )
    }
}

export default Posts
