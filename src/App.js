import React, { useState } from "react"; 
import "./App.css"; 
 
function App() { 
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 
 
  const addTask = () => { 
    if (task === "") return; 
    setTasks([...tasks, task]); 
    setTask(""); 
  }; 
 
  const deleteTask = (index) => { 
    const newTasks = tasks.filter((_, i) => i !== index); 
    setTasks(newTasks); 
  }; 
 
  return ( 
    <div className="app"> 
      <h1>To-Do List</h1> 
 
      <input 
        type="text" 
        value={task} 
        placeholder="Enter task" 
        onChange={(e) => setTask(e.target.value)} 
      /> 
 
      <button onClick={addTask}>Add Task</button> 
 
      <ul> 
        {tasks.map((t, index) => ( 
          <li key={index}> 
            {t} 
            <button onClick={() => deleteTask(index)}>Delete</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;
