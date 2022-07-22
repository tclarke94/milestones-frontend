import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowChildren = (props) => {
    let {id} = useParams();
    const [baby, setBaby] = useState([]);
    useEffect(() => {
        fetch( `https://milestones-tracker.herokuapp.com/baby`)
        .then(res => res.json())
        .then(res => setBaby(res))
        .catch(console.error)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



  return (
    baby.map((baby, index)=> (
        <div key={index} className='display' >
    <div>
         <img
            src = {baby.photo_url}
            alt = {baby.name}
            />
        <Link to={`/baby/${baby._id}`}>
        <h2 className='babyName'>{baby.name}</h2>
        </Link>
        <h2>{baby.gender}</h2>
        <h2>{baby.birth_date}</h2>
   <div>
    <Link to={`/`}>
        <h1 className='returnHp'>Return to Homepage</h1>
        </Link>
        </div>
          </div>
    </div>
    
  ))
  )}

export default ShowChildren

