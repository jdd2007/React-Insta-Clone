import React from 'react';
import './AddCommentSection.css';


const AddCommentSection = props => { 
    return (
        <div className="add-comment-container">
            <div className="add-comment-subcontainer">
                <div className="comment-input-section">Add your comment...</div>
                <div className="post-button">POST</div>
            </div>
        </div>
    );
};

export default AddCommentSection;