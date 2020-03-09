import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                            {/* <li><Link to={{
                                pathname: '/new-post',
                                search: '?type=inspirational',
                                hash: '#submit'
                            }}>New Post</Link></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path="/" render={() => <h3>Only "/" path</h3>} />
                <Route path="/" render={() => <h3>Starting with "/" path</h3>} /> */}

                <Route exact path="/" component={Posts} />
                <Route exact path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;