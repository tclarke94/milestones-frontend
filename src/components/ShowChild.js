import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowChild = (props) => {
    let {id} = useParams();
    const [baby, setBaby] = useState(null);
    useEffect(() => {
        fetch( `https://milestones-tracker.herokuapp.com/baby/${id}`)
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
        <h2>{baby.name}</h2>
        <h2>{baby.gender}</h2>
        <h2>{baby.birth_date}</h2>
        <Link to={`/`}>
        <h1>Return to Homepage</h1>
        </Link>
    </div>
    </div>
  ))
   ) }

export default ShowChild