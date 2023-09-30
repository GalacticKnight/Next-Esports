import React from 'react';
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
// import Link from "next/Link";
import Link from 'next/link'

const Page = () => {
    return (
      <div style={{backgroundColor:'black'}}>
          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 className="h2 section-title">Student E-Board Leaders</h2>
          <ul className="team-list">
            <div className="contact-card">
              <center><img src='/team-member-14.png' alt="profile-img" className="team-crop"/></center>
              <h1>John</h1>
              <p>Role: Treasurer</p>
              <p>Email: johnfjp99@gmail.com</p>
              {/* <p>Phone: (123) 456-7890</p> */}
            </div>
            <div className="contact-card">
              <center><img src='/team-member-13.png' alt="profile-img" className="team-crop"/></center>
              <h1>Alexander K. Raff</h1>
              <p>Role: Director</p>
              <p>Email: Orzaidus@gmail.com</p>
              <p>Phone: (917) 744-5995</p>
            </div>
            <div className="contact-card">
            <center><img src='/team-member-12.png' alt="profile-img" className="team-crop"/></center>
              <h1>Sasha</h1>
              <p>Role: President</p>
              <p>Email: sasha.calderon91@bcmail.cuny.edu</p>
              <p>Phone: (845) 707-5782</p>
            </div>
            <div className="contact-card">
              <center><img src='/team-member-11.png' alt="profile-img" className="team-crop"/></center>
              <h1>Soletia</h1>
              <p>Role: Vice President</p>
              <p>Email: Soletia00@gmail.com</p>
              <p>Phone: (347) 962-5443</p>
            </div>
           
            
          </ul>
          <h2 className="h2 section-title">Student E-board Members</h2>
            <ul className="team-list">
              
              <div className="contact-card">
                <center><img src='/team-member-2.png' alt="profile-img" className="team-crop"/></center>
                <h1>Eli</h1>
                <p>Role: Event Coordinator</p>
                <p>Email: Ekutsenok3@gmail.com</p>
                <p>Phone: (347) 325-4934</p>
              </div>
              <div className="contact-card">
                <center><img src='/team-member-5.png' alt="profile-img" className="team-crop"/></center>
                <h1>Juan</h1>
                <p>Role: Administrator</p>
                <p>Email: juan25.jt1@gmail.com</p>
                <p>Phone: (347) 303-0660</p>
              </div>
              <div className="contact-card">
                <center><img src='/team-member-1.png' alt="profile-img" className="team-crop"/></center>
                <h1>Vincent Lau</h1>
                <p>Role: Alumni Advisor</p>
                <p>Email: electricplasma411@gmail.com</p>
                <p>Phone: (917) 370-6277</p>
                
              </div>
              <div className="contact-card">
                <center><img src='/team-member-4.png' alt="profile-img" className="team-crop"/></center>
                <h1>Cheng</h1>
                <p>Role: Social Media Manager</p>
                <p>Email: Cheng.Chen14@bcmail.cuny.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="contact-card">
                <center><img src='/team-member-3.png' alt="profile-img" className="team-crop"/></center>
                <h1>Sully</h1>
                <p>Role: Event Coordinator</p>
                <p>Email: shlomo.orenstein13@gmail.com</p>
                <p>Phone: (917) 962-7741</p>    
              </div>
              <div className="contact-card">
                <center><img src='/team-member-7.png' alt="profile-img" className="team-crop"/></center>
                <h1>Darby Tabuteau</h1>
                <p>Role: Esports Manager</p>
                <p>Email: darbyt43@gmail.com </p>
                <p>Phone: (917) 618-8725</p>    
              </div>

            </ul>
            <div className="container">
              <Link href='/#contact'><button className="btn btn-primary">Return</button></Link>
            </div>
        <Footer/>
      </div>
    );
}

export default Page;