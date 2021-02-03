import React from "react";
import "./homepage.style.css";
import Directory  from "../../components/directory/directory.component";
const HomePage = () => {
    return (
        <div className="homePage">
            <div className="directory-menu">
                <Directory/>
            </div>
        </div>
    )
}

export default HomePage;