import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowChild = (props) => {
    let {id} = useParams();
    console.log(id)
    const [baby, setBaby] = useState([]);
    console.log(id)
    useEffect(() => {
        fetch( `https://milestones-tracker.herokuapp.com/baby/${id}`)
        .then(res => res.json())
        .then(res => setBaby(res))
        .catch(console.error)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



  return (
 
    <div className='singleBaby'>
         <img
            src = {baby.photo_url}
            alt = {baby.name}
            />
     
        <h2>{baby.name}</h2>
     
        <h2>{baby.gender}</h2>
        <h2>{baby.birth_date}</h2>
        <Link to={`/baby/${baby._id}/edit`}>
        <h1>Edit Baby</h1>
        </Link>
        <Link to={`/baby/${baby._id}/delete`}>
        <h1>Delete Baby</h1>
        </Link>


    <Link to={`/`}>
        <h1>Return to Homepage</h1>
        </Link>

          </div>
   
    

  )}

export default ShowChild

