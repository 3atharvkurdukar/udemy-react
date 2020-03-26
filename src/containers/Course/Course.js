import React, { Component } from 'react';

class Course extends Component {

    state = {
        id: null,
        title: ''
    }

    loadData() {
        const query = new URLSearchParams(this.props.location.search);
        if (this.state.id !== query.get('id')) {
            this.setState({
                id: query.get('id'),
                title: query.get('title')
            });
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Course ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;