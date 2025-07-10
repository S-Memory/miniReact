import React, { useState } from 'react';
import './index.css';
function ToDoList(){
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] =useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){ //for not adding blank space
        setTask(t=> [...t, newTask]);
        setNewTask("");}
    }
    function removeTask(index){ //index = the position of the task you want to remove.If tasks = ['a', 'b', 'c'] and index = 1 (meaning 'b'),then updateTasks = ['a', 'c']
        const updateTasks = tasks.filter((_, i)=> i!== index); //tasks.filter(...) = creates a new list of tasks by skipping the one at that index
        setTask(updateTasks);

    }
    function moveTaskUp(index){
        if(index > 0 ){ //Only works if it's not the first task (index > 0)
            const updateTasks=[...tasks]; // copy the task list
            [updateTasks[index],updateTasks[index-1]]=
            [updateTasks[index-1],updateTasks[index]];// swap current task with the one above
            setTask(updateTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){ //Checks if the task is not the last one
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index+1]]=
            [updateTasks[index+1],updateTasks[index]];
            setTask(updateTasks);
        }


    }
        return(
        <div className="to-do-list">

            <h1>📝To Do Lists✔️🗓️</h1>
            <div>
                <input
                 tpye="text" className='input-container'
                 placeholder="Enter a task...."
                 value={newTask}
                 onChange={handleInputChange}/>

                 <button className='add-button'
                 onClick={ addTask}>
                    Add✅
                 </button>
            </div>
<ol>
    {tasks.map((task, index)=>
    <li key={index}>
        <span className="text">{task}</span>
        <button className="delete-button" onClick={()=>removeTask(index)}>
            Remove❌
        </button>
        <button className="move-button" onClick={()=> moveTaskUp(index)}>
          ⬆️
        </button>
         <button className="move-button" onClick={()=> moveTaskDown(index)}>
          ⬇️
        </button>

    </li>
)}
</ol>
        </div>);
}
export default ToDoList