import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const EditChild = () => {
    const initialState = { name: '', birth_date: '' , gender: '', photo_url: ''};
    const [formState, setFormState] = useState(initialState);
    let {id} = useParams();

  
  const URL = `https://milestones-tracker.herokuapp.com/baby/${id}`
  const navigate= useNavigate()

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(URL, {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState)
  })
  navigate(`/baby`)
    console.log(formState);
    
   setFormState(initialState);
    
  };



  return (
    <div className='add'> 
       
        <form onSubmit={handleSubmit} className='baby-form'>
      <label htmlFor="name">Baby Name: </label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
       
      <label htmlFor="date">Birth Date: </label>
      <input
        id="date"
        type="text"
        onChange={handleChange}
        value={formState.date}
      />

      <label htmlFor="gender">Gender: </label>
      <input
        id="gender"
        type="text"
        onChange={handleChange}
        value={formState.gender}
      />
           
      <label htmlFor="photo">Photo URL: </label>
      <input
        id="photo"
        type="text"
        onChange={handleChange}
        value={formState.photo}
      />
            <button type="submit">Submit</button>
    
            <Link to={`/`} >
      <h3>Return to Homepage</h3>
      </Link>
      </form>



    </div>
  )
}

export default EditChild