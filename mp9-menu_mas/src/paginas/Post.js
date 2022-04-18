import React from 'react';
import {useParams} from 'react-router-dom';
import posts from './../data/datos_posts';

export default function Post() {

    const params = useParams();
    let post = params.postId
    post = posts[post];

    return (
        <section>
            <div className="post-section">
                <h2>{ post.title }</h2>
                <p>{ post.content }</p>
            </div>
        </section>
    )
}
