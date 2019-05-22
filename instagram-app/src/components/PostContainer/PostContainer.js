import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => { 
    return (
        <div className="postContainerClass">
            <div className="top-post">top part</div>
            <div className="post-img-div">
                 <img src="somesource" className="img-itself" alt="photo" />
            </div>
            <div className="icon-bar">icon bar</div>
            <div className="counter-bar">counter bar</div>
            < CommentSection />
        </div>
    );
};

export default PostContainer;