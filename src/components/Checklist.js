import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Checklist = () => {
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
        
        checklists.map((checklists, index)=> (
            <div key={index} className='display' >
    <div className='checklist'>
    {/* <Link to={`${checklists._id}`}/> */}
    <h1 key = {checklists.age_range}>{checklists.age_range}</h1>  
   
      <h1 key = {checklists.criteria}>{checklists.criteria}</h1>  
      {/* <h1 key = {checklists.criteria_met}>{checklists.criteria_met}</h1>   */}

    </div>

    <Link to={`/`} >
      <h3 className='returnHp'>Return to Homepage</h3>
      </Link>
    </div>
    
    ))
    
    )}

export default Checklist