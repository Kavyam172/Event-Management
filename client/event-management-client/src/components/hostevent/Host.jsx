import React from 'react'
import './Host.css'

const Host = () => {
    return (
        <div class="container">
            <div className="createeventinfo">
                <h2>Create Event</h2>
                <form>
                    <div className="Fgrp">
                        <div className="in1">
                            <label for="event-title">Event Title:</label>
                            <input type="text" id="event-title" name="event-title" placeholder="Enter your mail" />
                        </div>
                        <div className="in1">
                            <label for="event-venue">Event Venue:</label>
                            <input type="text" id="event-venue" name="event-venue" placeholder="Enter your mail" />
                        </div>
                    </div>
                    <div className="mainformgroup">
                        <div class="form-group">
                            <div>
                                <label for="start-time">Start Time:</label>
                                <input type="text" id="start-time" name="start-time" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label for="end-time">End Time:</label>
                                <input type="text" id="end-time" name="end-time" placeholder="Enter your mail" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div>
                                <label for="start-date">Start Date:</label>
                                <input type="text" id="start-date" name="start-date" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label for="end-date">End Date:</label>
                                <input type="text" id="end-date" name="end-date" placeholder="Enter your mail" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="eventdescription">
                <h2>Event Description</h2>
                <form>
                    <div className="in1">
                        <label for="event-image">Event Image:</label>
                        <div className="inputimg">
                        <input type="file" id="event-image" name="event-image" />
                        </div>
                    </div>
                    <div className="in1">
                        <label for="event-description">Event Description:</label>
                        <textarea id="event-description" name="event-description" placeholder="Type here..."></textarea>
                    </div>
                    <button type="submit" class="hostbutton">Create event</button>
                </form>
            </div>

        </div>
    )
}

export default Host