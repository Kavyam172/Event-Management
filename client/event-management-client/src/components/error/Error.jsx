import React from 'react'
import './Error.css'

const error = () => {
  return (
    <div className="errorpage">
      <div className="_404"><img src="/src/assets/errorimg/undraw_page_not_found_su7k 1.svg" alt="" /></div>
      <div className="oops">
        <h1>Oops!</h1>
        <p>we can't seem to find the page you are looking for </p>
        <button>Back to Homepage</button>
      </div>
      <div className="followus">
        <h4>Follow us on</h4>
        <div className="mediaimgs">
           <a href=""><img src="/src/assets/errorimg/Group 60.svg" alt="" /></a>
           <a href=""><img src="/src/assets/errorimg/Group 61.svg" alt="" /></a>
          <a href=""><img src="/src/assets/errorimg/Group 62.svg" alt="" /></a>
          <a href=""><img src="/src/assets/errorimg/Group 63.svg" alt="" /></a>
          <a href=""><img src="/src/assets/errorimg/Group 64.svg" alt="" /></a>

        </div>
      </div>
    </div>

  )
}

export default error