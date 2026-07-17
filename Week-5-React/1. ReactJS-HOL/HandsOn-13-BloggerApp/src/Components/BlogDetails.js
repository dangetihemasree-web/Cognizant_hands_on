import React from 'react';

function BlogDetails() {
    const content = (
        <div>
            <h3>React Learning</h3>
            <p>Stephen Biz</p>
            <p>Welcome to learning React!</p>
            <h3>Installation</h3>
            <p>Schewzdenier</p>
            <p>You can install React from npm.</p>
        </div>
    );

    return (
        <div className="v1">
            <h1>Blog Details</h1>
            {content}
        </div>
    );
}

export default BlogDetails;