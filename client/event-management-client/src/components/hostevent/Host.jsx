import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './Host.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


const MySwal = withReactContent(Swal)   

const Host = () => {

    const [venues, setVenues] = useState([])
    const [auth, setAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    //dymaically adding categories
    const categories = ['Music', 'Dance', 'Art', 'Theatre', 'Comedy', 'Food', 'Sports', 'Fitness', 'Health', 'Fashion', 'Technology', 'Business', 'Science', 'Travel', 'Religion', 'Charity', 'Education', 'Family', 'Community', 'Film', 'Media', 'Government', 'Home', 'Auto', 'Hobbies', 'Other']
    const selectCategory = useRef(null)
    const selectVenue = useRef(null)


    const checkAuth = async () => {
        const token = Cookies.get('token')
        if (token) {
            const res = await axios.get('http://localhost:3000/events/check-role', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(res.data.role === 'organizer'){
                console.log('User is an organizer')
            }
            else{
                MySwal.fire({
                    icon: 'error', 
                    title: 'You are not an organizer',
                    confirmButtonText: 'Okay'
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = '/'
                    }
                })
            }
        }
        else{
            window.location.href = '/signin'
        }
    }
        
    
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
        venues.forEach((venue) => {
            const option = document.createElement('option')
            option.value = venue._id
            option.text = venue.name
            selectVenue.current.appendChild(option)
        })
    }

    useEffect(() => {
        checkAuth()
    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const token = Cookies.get('token'); // Get the token from cookies
        if (!token) {
            window.location.href = '/signin';
            return;
        }

        addCategory(categories)
        fetchVenues()
    }, [auth])

    useEffect(() => {
        addVenues()
    }, [venues])
    // when user clicks on create event button, call a function to make a post request to server to create event
    const createEvent = async () => {
        setIsLoading(true)
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
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            }
        )
        if(res.status === 200){
            setIsLoading(false)
            MySwal.fire({
                title: 'Event Created',
                text: 'Your event has been created successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
            document.querySelector('form').reset()
            // reset banner image and textarea
            document.getElementById('event-image').value = ''
            document.getElementById('event-description').value = ''
            
        }else if(res.status === 403){
            setIsLoading(false)
            MySwal.fire({
                title: 'Error',
                text: 'You are not an organizer',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }
        else if(res.status === 500){
            setIsLoading(false)
            MySwal.fire({
                title: 'Error',
                text: 'There was an error creating the event',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }

    }
    




    return (
        <div className="container">
            {isLoading && 
            <div className="loader-overlay">
                <div className="loader"></div>
            </div>}
            <div className="createeventinfo">
                <h2>Create Event</h2>
                <form>
                    <div className="Fgrp">
                        <div className="in1">
                            <label htmlFor="event-title">Event Title:</label>
                            <input type="text" id="event-title" name="event-title" placeholder="Enter Title" required/>
                        </div>
                        <div className="in1">
                            <label htmlFor="event-category">Event Category:</label>
                            <select id="event-category" defaultValue={""} ref={selectCategory} name="event-category" required>
                                <option value="" disabled>Select Category</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label htmlFor="event-venue">Event Venue:</label>
                            <select name="event-venue" defaultValue={""} ref={selectVenue} id="event-venue" required>
                                <option value="" disabled>Select Venue</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label htmlFor="event-date">Booking Price:</label>
                            <input type="number" id="event-price" name="event-price" placeholder="Enter Price" required/>
                        </div>
                    </div>
                    <div className="mainformgroup">
                        <div className="form-group">
                            <div>
                                <label htmlFor="start-time">Start Time:</label>
                                <input type="time" id="start-time" name="start-time" placeholder="Enter your mail" required/>
                            </div>
                            <div>
                                <label htmlFor="end-time">End Time:</label>
                                <input type="time" id="end-time" name="end-time" placeholder="Enter your mail" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="start-date">Start Date:</label>
                                <input type="date" id="start-date" name="start-date" placeholder="Enter your mail" required/>
                            </div>
                            <div>
                                <label htmlFor="end-date">End Date:</label>
                                <input type="date" id="end-date" name="end-date" placeholder="Enter your mail" required/>
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
                            <input type="file" id="event-image" name="event-image" required/>
                        </div>
                    </div>
                    <div className="in1">
                        <label htmlFor="event-description">Event Description:</label>
                        <textarea id="event-description" name="event-description" placeholder="Type here..." required></textarea>
                    </div>
                    <button type="button" className="hostbutton" onClick={createEvent}>Create event</button>
                </form>
            </div>

        </div>
    )
}

export default Host