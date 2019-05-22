import React from 'react';
import './PostContainer.css';
import AddCommentSection from '../AddCommentSection/AddCommentSection';

const PostContainer = props => { 
    return (
        <div className="post-container-class">
            <div className="top-bar">
                <div className="profile">
                    <div className="profile-photo-circle">(Profile)
                        <a href=""><i className="fab fa-twitter fa-2x"></i></a>  
                    </div>
                    <div className="profile-name">
                        <a className="profile-name" href="#">Profile Name</a>
                    </div>
                </div>
                <div className="action-button">(...)</div>
            </div>
            <div className="post-img-div">
                 <img src="some-source" className="img-itself" alt="alt" />
            </div>
            <div className="icon-bar">
                <div className="left-icons">
                    <div className="heart-icon">(Heart)
                        <a href=""><i className="fab fa-twitter fa-2x"></i></a>   
                    </div>
                    <div className="speech-bubble-icon">(SpeechBubble)
                        <a href=""><i className="fab fa-twitter fa-2x"></i></a>   
                    </div>
                    <div className="share-icon">(Share)
                        <a href=""><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                </div>
                <div className="right-icons">
                    <div className="ribbon-icon">(Ribbon)
                        <a href=""><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div className="counter-bar">
                <a className="like-counter-link" href="#">100 likes</a>
            </div>
            <div className="caption-box">
                <div className="caption-profile-name">Profile Name</div>
                <div className="caption-text">Text of Caption</div>
            </div>
            <div className="age-of-post-bar">
                <a className="timestamp-link" href="#">X Hours Ago</a>
            </div>
            < AddCommentSection />
        </div>
    );
};

export default PostContainer;