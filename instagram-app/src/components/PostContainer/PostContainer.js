import React from 'react';
import './PostContainer.css';
import AddCommentSection from '../AddCommentSection/AddCommentSection';

const PostContainer = props => { 
    return (
        <div className="post-container-class">
            <div className="top-bar-container">
                <div className="top-bar">
                    <div className="profile">
                        <div className="profile-photo-circle">
                          <a href=""><i className="far fa-circle fa-2x"></i></a> 
                        </div>
                        <div className="profile-name">
                            <a className="profile-name-link" href="#">Profile Name</a>
                        </div>
                    </div>
                <div className="action-button">(...)</div>
            </div>
            </div>
            <div className="post-img-div">
                <img src="#" className="stretch" alt="" />
            </div>
            <div className="icon-bar">
                <div className="left-icons">
                    <div className="heart-icon">
                        <a href=""><i className="far fa-heart fa-2x"></i></a>   
                    </div>
                    <div className="speech-bubble-icon">
                        <a href=""><i className="far fa-comment fa-2x"></i></a>   
                    </div>
                    <div className="share-icon">
                        <a href=""><i className="fas fa-sign-out-alt fa-2x fa-rotate-270"></i></a>
                    </div>
                </div>
                <div className="right-icons">
                    <div className="ribbon-icon">
                        <a href=""><i className="far fa-bookmark fa-2x"></i></a>
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