
import { useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function DeleteChild(props) {
  const navigate = useNavigate()
  const { id } = useParams()
    const URL= `https://milestones-tracker.herokuapp.com/baby/`


    const handleSubmit = async (event) => {
      event.preventDefault();
    
      await fetch(URL + id, {
        method: 'DELETE',})
  
        navigate(`/baby`)
    };

      
   return(
       <div>
        <h1>This will delete all your babies data!</h1>
         <button onClick={handleSubmit} className='delete-btn'>
           Delete
         </button>
        
        </div>
    
   )
  }
  export default DeleteChild;