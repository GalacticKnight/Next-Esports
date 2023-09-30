import React from 'react';
const Gallery = () => {
    return (
        <section className="gallery">
          <div className="container">
            <ul className="gallery-list has-scrollbar">
              <li>
                <figure className="gallery-item">
                    <img src='/gallery-img-1.jpg'alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                    <img src='/gallery-img-2.jpg' alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                    <img src='/gallery-img-3.jpg' alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                    <img src='/gallery-img-4.jpg' alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                    <img src='/gallery-img-5.jpg' alt="profile-img" />
                </figure>
              </li>
            </ul>
          </div>
        </section>
    );
}

export default Gallery;