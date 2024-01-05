import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios'; 

const Task = (props) => {

   const handleDelete = (taskid) => {
    axios.delete(`http://localhost:3000/todos/${taskid}`)
    .then(res => {
      console.log(res);
    })
   }
 
  return (
    
    <div  className="task-list" style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:'space-between', alignItems:"start", marginTop:"1vw"}}>
      <ListGroup>
        <ListGroup.Item>{props.taskName}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item>{props.taskDate}</ListGroup.Item>
      </ListGroup>
      
      <Button variant='danger' onClick={() => {handleDelete(props.taskid)}}  style={{padding:"10px 20px 10px 20px"}}>Delete</Button>  
    </div>
    
  )
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  // index: PropTypes.number.isRequired,
  taskid: PropTypes.string.isRequired,
  taskDate: PropTypes.string.isRequired, // or whatever type it should be
 // or whatever type it should be
  // Other props and their validations
};
export default Task