import React from 'react';
import './SearchBar.css'
//import { faHome } from "react-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = props => { 
    return (
        <div className="search-bar">
            <div className="left-search-bar">
                <div className="insta-icon">
                    <a href=""><i className="fab fa-instagram fa-2x"></i></a>
                </div>     
                <div className="instagram-text-logo">
                    <a className="instagram-link" href="#">Instagram</a>
                </div>
            </div>            
            <div className="search-box">
                <div className="search-icon">  
                    <a href=""><i className="fas fa-search"></i></a>
                </div>
                <div className="search-text">Search</div>    
            </div>
            <div className="right-search-bar">
                <div className="explore-icon">
                    <a href=""><i className="far fa-compass fa-2x"></i></a>
                </div>
                <div className="heart-icon">
                    <a href=""><i className="far fa-heart fa-2x"></i></a>
                </div>
                <div className="profile-icon">
                    <a href=""><i className="far fa-user fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;