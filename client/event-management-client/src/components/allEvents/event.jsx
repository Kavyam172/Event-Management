import React from 'react';
import "./event.css";
import First from '/src/components/Hero/upcoming/First.jsx';

const Event = () => {
  return (
    <div>
      <div className="event-hive-hero">
        <div className="hero-content">
          <h2>Thriving Above Event Expectations.</h2>
          <h1>Event <span>Hive</span>-ing the Best.Day. Ever.</h1>
          <div className="stats">
            <div>
              <span>2k+</span>
              <p>Total Events Hosted</p>
            </div>
            <div>
              <span>100+</span>
              <p>Total Events Live</p>
            </div>
          </div>
        </div>

        <img src="src/assets/event-Image.svg" alt="Event Hive Hero Image" className="hero-image" />
      </div>

      {/* Integrate the Fourth component here */}
      <First />
    </div>
  );
}

export default Event;
