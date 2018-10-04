import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Post extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }


    render() {

        const postItems = this.state.posts.map(post => {
            return <div key={post.id}><h3>{post.title}</h3><p>{post.body}</p></div>
        });

        return (
            <div>
                <h1>Hi Post</h1>
                {postItems}
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(Post);
