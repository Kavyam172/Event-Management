

import React, { useState } from 'react'
import './Booknow.css'
import Eventdetails from './Eventdetails/Eventdetails'
import Summery from './Summery/Summery'
import Payment from './Payment/Payment'
import Confirmation from './Confirmation/Confirmation'
import { useLocation } from 'react-router-dom'
import { EventContext } from '../../config/context'

const Booknow = () => {
  const [curr,setCurr]=useState(0)
  const [regularTickets,setRegularTickets]=useState(0);
  const [bookingId,setBookingId]=useState('');
  const location = useLocation()
  const event = location.state.event



  const next = () =>{
    if(curr<2){
      setCurr(curr+1)
    }
  }
  const increaseRegularTickets = ()=>{
    setRegularTickets(regularTickets+1)
  }
  const decreaseRegularTickets = ()=>{
    if(regularTickets>0){
      setRegularTickets(regularTickets-1)

    }

    
  }
  return (
    <div className="backimg">
      <EventContext.Provider value={{event}}>
        {curr==0 && <Eventdetails next={next} regularTickets={regularTickets} increaseRegularTickets={increaseRegularTickets} decreaseRegularTickets={decreaseRegularTickets} />}
        {curr==1 && <Summery next={next} regular={regularTickets} setBookingId={setBookingId}/>}
        {curr==2 && <Payment next={next} regular={regularTickets} bookingId={bookingId}/>}
      </EventContext.Provider>
    </div>
  )
}

export default Booknow