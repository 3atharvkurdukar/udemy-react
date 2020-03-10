import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

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
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li>
                                <NavLink 
                                    to={'/new-post'}
                                    activeClassName="my-active"
                                    activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>New Post</NavLink>
                            </li>
                            {/* <li><NavLink to={{
                                pathname: '/new-post',
                                search: '?type=inspirational',
                                hash: '#submit'
                            }}>New Post</NavLink></li> */}
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