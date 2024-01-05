import { useEffect, useState } from "react";
import "../src/App.css";
import Task from "./components/Task";
import Topblock from "./components/Topblock";
import axios from 'axios';

const App = () => {

  const [task, setTask] = useState([]);
  const [list, setList] = useState('');
 
  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then(response => setTask(response.data));
  }, [task])

   
 

  return (
    <center className="todo-container">
    <Topblock list={list} setList={setList}/>
    {task.length === 0 ? <p> No Data Found</p> : task.map((elem) => {
      return <Task key={elem._id} taskid={elem._id} taskName={elem.title} taskDate={elem.description} />
    })}     
    </center>
  );
};

export default App;
