import React from 'react';
const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
            <h1 className="h1 hero-title">Brooklyn College Esports</h1>
            <h2 className="hero-subtitle">PLAY LIKE A CHAMPION</h2>
            <div className="btn-group">
                <button className="btn btn-primary">
                <a href="https://www.twitch.tv/cunybcesports"><span 
                // styles="color:rgb(255, 255, 255);text-align:center;"
                ><b>Watch Live</b></span></a>
                {/* <!-- <ion-icon name="play-circle"></ion-icon> --> */}
                </button>
                {/* <button><a href="https://forms.gle/kVmB9CahkDHVXr796" className="btn btn-secondary"><b>Sign Up</b></a></button> */}
            </div>
            </div>
        </section>
    );
}

export default Hero;