import React from 'react';
import Link from 'next/link';

const Contact2 = () => {
    return (
        <section className="team" id="team">
          <div className="container">
            <h2 className="h2 section-title">Student E-board Members</h2>
            <ul className="team-list">
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-1.png' alt="profile-img" className="team-crop"/>
                        <center>Vincent</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                    <figure>
                        <img src='/team-member-2.png' alt="profile-img" className="team-crop"/>
                        <center>Eli</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src='/team-member-5.png' alt="profile-img" className="team-crop"/>
                    <center>Jaun</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                        <img src='/team-member-4.png' alt="profile-img" className="team-crop"/>
                        <center>Cheng</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src='/team-member-7.png' alt="profile-img" className="team-crop"/>
                      <center>Darby Tabuteau</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src='/team-member-3.png' alt="profile-img" className="team-crop"/>
                      <center>Sully</center>
                  </figure>
                </a>
              </li>
            </ul>
            <Link href='/member'><button className="btn btn-primary">View All Members</button></Link>
          </div>
          
        </section>
    );
}

export default Contact2;  