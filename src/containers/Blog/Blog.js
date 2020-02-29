import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 4);
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

    postSelectedHandler(post_id) {
        this.setState({
            selectedPostId: post_id
        });
    }

    render () {

        const posts = this.state.posts.map((post) => (
            <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
        ));

        return (
            <div>
                <section className="Posts">
                    { this.state.error ? <p style={{textAlign: 'center'}}>Something went wrong!</p> : posts }
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;