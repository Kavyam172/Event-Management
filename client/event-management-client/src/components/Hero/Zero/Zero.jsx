import React from 'react';
import './Zero.css';  // Make sure the path is correct

const EventHive = () => {
  return (
    <main>
      <section className="hero">
        <div className="overlay">
          <h2>MADE FOR THOSE WHO DO</h2>
        </div>
        <div className="hero-nav">
          <button className="prev">&lt;</button>
          <button className="next">&gt;</button>
        </div>
        <section className="search">
          <div className="search-container">
            <div className="search-section">
              <h3 className="section-heading">Looking For</h3>
              <select className="category-select">
                <option value="all">Choose event type</option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="theatre">Theatre</option>
              </select>
            </div>
            <div className="search-section">
              <h3 className="section-heading">Location</h3>
              <select className="location-select">
                <option value="all">Choose Locations</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div className="search-section">
              <h3 className="section-heading">When</h3>
              <input type="date" className="date-input" />
            </div>
            <div className="search-btn-container">
              <button className="search-btn">
                <img src="/src/assets/search.svg" alt="Search" />
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default EventHive;
