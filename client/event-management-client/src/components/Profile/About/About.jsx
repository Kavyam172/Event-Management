import React from "react";
import "./About.css";

const About = ({bio}) => {
    return (
        <div className="about-container">
            <p>
                {bio?bio:'No bio available. Update your profile to add a bio.'}
            </p>
        </div>
    );
}

export default About;