import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/datos_posts';

class Posts extends Component {
    render() {
        return (
            <section className="posts">
                <h3>Posts</h3>
                { posts.map(post =>
                    <article key={ post.id } className="post">
                        <Link to={ `/post/${post.id}` }>
                            <h4>{ post.title }</h4>
                        </Link>
                        <p>{ post.excerpt }</p>
                        <span>{ post.author }</span>
                        <hr/>

                    </article>
                ) }
            </section>
        )
    }
}
export default Posts;