import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
    const [checklists, setChecklists] = useState([])

    useEffect(() => {
        fetch('https://milestones-tracker.herokuapp.com/')
        .then(res => res.json())
        .then(json => {
          setChecklists(json)
      
      
        })
        .catch(console.error)
      }, []
    );
  
    return(
       <div className='home'>
           <h1> Welcome to Milestones Tracker! </h1>
           <Link to={`/add`}>
        <div className='new-baby-btn home-btn'>
            <h2>Add a new child to track!</h2>
        </div>
    </Link>

    <Link to={`/list`}>
        <div className='checklist-btn home-btn'>
            <h2>Baby milestone checklist</h2>
        </div>
    </Link>

    <Link to={`/baby`}>
        <div className='show-baby-btn home-btn'>
            <h2>Check your babies progress</h2>
        </div>
    </Link>
       </div> 

    )}

export default Homepage