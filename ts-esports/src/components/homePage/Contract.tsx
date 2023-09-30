import React from 'react';
const Contact = () => {
    return (
        <section className="team contact" id="contact">
          <div className="container">
            <h2 className="h2 section-title">Student E-Board Leaders</h2>
            <ul className="team-list">
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-11.png' alt="profile-img" className="team-crop"/>
                        <center>Soletia</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-12.png' alt="profile-img" className="team-crop"/>
                        <center>Sasha</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-13.png' alt="profile-img" className="team-crop"/>
                        <center>Alexander</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-14.png' alt="profile-img" className="team-crop"/>
                        <center>John</center>
                    </figure>
                </a>
              </li>
            </ul>
          </div>
        </section>
        
    );
}

export default Contact;    