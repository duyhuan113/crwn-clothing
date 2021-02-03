import React from 'react';
import './menu-item.style.css';
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imgUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }}>
            <div className="background-img" style={{ backgroundImage: `url(${imgUrl})` }} />

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subTitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);