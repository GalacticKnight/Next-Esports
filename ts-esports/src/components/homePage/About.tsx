import React from 'react';
export function About() {
    return (
        <section className="about" id="about">
            <div className="containe2">
                <div className="about-content">
                    <a href="https://www.twitch.tv/cunybcesports">
                    <figure className="about-banner">
                        <img src="/Stream.jpg" alt="profile-img" className="about-img"/>
                        <h1 className="about-title">Watch Our <strong>Stream</strong> </h1>
                        {/* </img> */}
                    </figure>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;