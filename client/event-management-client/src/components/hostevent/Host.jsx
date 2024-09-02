import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './Host.css'

const Host = () => {

    const [venues, setVenues] = useState([])

    //dymaically adding categories
    const categories = ['Music', 'Dance', 'Art', 'Theatre', 'Comedy', 'Food', 'Sports', 'Fitness', 'Health', 'Fashion', 'Technology', 'Business', 'Science', 'Travel', 'Religion', 'Charity', 'Education', 'Family', 'Community', 'Film', 'Media', 'Government', 'Home', 'Auto', 'Hobbies', 'Other']
    const selectCategory = useRef(null)
    const selectVenue = useRef(null)
    
    const addCategory = (categories) => {
        categories.forEach((category) => {
            const option = document.createElement('option')
            option.value = category
            option.text = category
            selectCategory.current.appendChild(option)
        })
    }

    // function to fetch venues from server
    const fetchVenues = async () => {
        const res = await fetch('http://localhost:3000/venues')
        const data = await res.json()
        setVenues(data)
    }

    // function to add venues as options in select tag
    const addVenues = async () => {
        console.log(venues)
        venues.forEach((venue) => {
            const option = document.createElement('option')
            option.value = venue._id
            option.text = venue.name
            selectVenue.current.appendChild(option)
        })
    }
    
    useEffect(() => {
        addCategory(categories)
        fetchVenues()
    }, [])

    useEffect(() => {
        addVenues()
    }, [venues])
    // when user clicks on create event button, call a function to make a post request to server to create event
    const createEvent = async () => {
        const eventTitle = document.getElementById('event-title').value
        const eventCategory = document.getElementById('event-category').value
        const eventVenue = document.getElementById('event-venue').value
        const eventPrice = document.getElementById('event-price').value
        const startTime = document.getElementById('start-time').value
        const endTime = document.getElementById('end-time').value
        const startDate = document.getElementById('start-date').value
        const endDate = document.getElementById('end-date').value
        const eventImage = document.getElementById('event-image').files[0]
        const eventDescription = document.getElementById('event-description').value

        const event = {
            title: eventTitle,
            category: eventCategory,
            venue: eventVenue,
            price: eventPrice,
            startTime: startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate,
            image: eventImage,
            description: eventDescription
        }

        const res = await axios.post('http://localhost:3000/events', event,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        // const data = await res.json()
        console.log(res)        
    }
    




    return (
        <div className="container">
            <div className="createeventinfo">
                <h2>Create Event</h2>
                <form>
                    <div className="Fgrp">
                        <div className="in1">
                            <label htmlFor="event-title">Event Title:</label>
                            <input type="text" id="event-title" name="event-title" placeholder="Enter Title" />
                        </div>
                        <div className="in1">
                            <label htmlFor="event-category">Event Category:</label>
                            <select id="event-category" defaultValue={""} ref={selectCategory} name="event-category">
                                <option value="" disabled>Select Category</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label htmlFor="event-venue">Event Venue:</label>
                            <select name="event-venue" defaultValue={""} ref={selectVenue} id="event-venue">
                                <option value="" disabled>Select Venue</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label htmlFor="event-date">Booking Price:</label>
                            <input type="number" id="event-price" name="event-price" placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="mainformgroup">
                        <div className="form-group">
                            <div>
                                <label htmlFor="start-time">Start Time:</label>
                                <input type="time" id="start-time" name="start-time" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label htmlFor="end-time">End Time:</label>
                                <input type="time" id="end-time" name="end-time" placeholder="Enter your mail" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="start-date">Start Date:</label>
                                <input type="date" id="start-date" name="start-date" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label htmlFor="end-date">End Date:</label>
                                <input type="date" id="end-date" name="end-date" placeholder="Enter your mail" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="eventdescription">
                <h2>Event Description</h2>
                <form>
                    <div className="in1">
                        <label htmlFor="event-image">Event Banner:</label>
                        <div className="inputimg">
                            <input type="file" id="event-image" name="event-image" />
                        </div>
                    </div>
                    <div className="in1">
                        <label htmlFor="event-description">Event Description:</label>
                        <textarea id="event-description" name="event-description" placeholder="Type here..."></textarea>
                    </div>
                    <button type="button" className="hostbutton" onClick={createEvent}>Create event</button>
                </form>
            </div>

        </div>
    )
}

export default Host