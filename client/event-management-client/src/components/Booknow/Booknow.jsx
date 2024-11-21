

import React, { useState } from 'react'
import './Booknow.css'
import Eventdetails from './Eventdetails/Eventdetails'
import Summery from './Summery/Summery'
import Payment from './Payment/Payment'
import Confirmation from './Confirmation/Confirmation'

const Booknow = () => {
 
  const [curr,setCurr]=useState(0)
  const [regularTickets,setRegularTickets]=useState(0);
  const [vipTickets,setVipTickets]=useState(0);
  const next = () =>{
    if(curr<3){
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
  const increaseVipTickets = ()=>{
    setVipTickets( vipTickets+1)
  }
  const decreaseVipTickets = ()=>{
    if(vipTickets>0){
      setVipTickets(vipTickets-1)
    }
  }
  return (
    <div className="backimg">
      {curr==0 && <Eventdetails next={next} regularTickets={regularTickets} vipTickets={vipTickets} increaseRegularTickets={increaseRegularTickets} decreaseRegularTickets={decreaseRegularTickets} increaseVipTickets={increaseVipTickets} decreaseVipTickets={decreaseVipTickets} />}
      {curr==1 && <Summery next={next}/>}
      {curr==2 && <Payment next={next}/>}
      {curr==3 && <Confirmation/>}
    </div>
  )
}

export default Booknow