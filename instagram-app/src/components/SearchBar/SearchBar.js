import React from 'react';
import './SearchBar.css'
//import { faHome } from "react-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBar = props => { 
    return (
        <div className="search-bar-class">
            <div className="footer-icons">
                <div className="insta-icon">(insta)
                    <a href=""><i className="fab fa-twitter fa-2x"></i></a>
                </div>     
            </div>
            <div className="instagram-text-logo">
                <a className="instagram-link" href="#">Instagram</a>
            </div>
            <div className="search-box">
                <div className="search-icon">(search)
                    <a href=""><i className="fab fa-twitter fa-2x"></i></a>
                </div>
                <div className="search-text">Search</div>    
            </div>
            <div className="explore-icon">(explore)
                <a href=""><i className="fab fa-twitter fa-2x"></i></a>
            </div>
            <div className="heart-icon">(heart)
                <a href=""><i className="fab fa-twitter fa-2x"></i></a>
            </div>
            <div className="profile-icon">(profile)
                <a href=""><i className="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    );
};

export default SearchBar;