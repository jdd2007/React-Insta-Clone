import React from 'react';
import './PostContainer.css';
import AddCommentSection from '../AddCommentSection/AddCommentSection';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
//                 {data.map(item => <p>{item["comments"][0]["text"]}</p>)}

const PostContainer = props => { 
    const data = dummyData;
    return (
        <div className="post-container-class">
            <div className="top-bar-container">
                <div className="top-bar">
                    <div className="profile">
                        <div className="profile-photo-circle">
                          <a href=""><i className="far fa-circle"></i></a> 
                        </div>
                        <div className="profile-name">
                            <a className="profile-name-link" href="#">{data[0]["username"]}</a>
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
                <a className="like-counter-link" href="#">{data[0]["likes"]} likes</a>
            </div>
            <div className="caption-box">
                <span className="caption-profile-name">{data[0]["comments"][0]["username"]}  </span>
                <span className="caption-text">{data[0]["comments"][0]["text"]}</span>
            </div>
            <div className="caption-box">
                <span className="caption-profile-name">{data[0]["comments"][1]["username"]}  </span>
                <span className="caption-text">{data[1]["comments"][1]["text"]}</span>
            </div>
            <div className="caption-box">
                <span className="caption-profile-name">{data[0]["comments"][2]["username"]}  </span>
                <span className="caption-text">{data[2]["comments"][2]["text"]}</span>
            </div>
            <div className="age-of-post-bar">
                <a className="timestamp-link" href="#">Posted {data[0]["timestamp"]}</a>
            </div>
            < AddCommentSection />
        </div>
    );
};

PostContainer.propTypes = {
    quote: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  };

export default PostContainer;