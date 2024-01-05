import { Button, } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';


const Topblock = ({setList, list}) => {

  const [desc, setDesc] = useState('');

  const handleCreate = () => {
    if(list.length === 0 && desc.length === 0){
      alert("fill the input fileds first");
    }
    else{
      axios.post('http://localhost:3000/create',{
        title: list,
        description: desc,
       })
       .then(response => {
        console.log(response);
       })
       .catch(err => {
        console.log(err, "pleased try again later");
       })

       setList('');
       setDesc('');
    }
   
  }


  return (
    <div className="top-block" style={{display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center"}}>
       
        <input type="text" name="title" value={list} onChange={(e) => setList(e.target.value)}  placeholder='Enter your task' style={{padding:"6px", width:"22vw"}}/>
    
        <input type="text" name='description' value={desc} onChange={e => setDesc(e.target.value)} style={{marginLeft:"0vw", padding:"5px 10px 5px 10px"}} placeholder='Your task description'/>
     
      
      <Button className='addTaskButton' onClick={handleCreate} variant='success'>Add Task</Button>  

    </div>
  )
}

Topblock.propTypes = {
    setList: PropTypes.func.isRequired,
    list: PropTypes.string.isRequired,
}

export default Topblock