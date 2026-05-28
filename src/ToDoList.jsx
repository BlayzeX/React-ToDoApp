import { use, useState } from "react";
function ToDoList(){
    const [task, setTask] = useState(["Wake Up at 8Am", "Eat Breakfest", "Code"]);
    const [newTask, setNewTask] = useState("");
    function handleInput(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        setTask(t => [...t, newTask]);
        setNewTask("");
    }
    function removeTask(index){
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }
    function taskUp(index){
       if(index > 0) {
        const updateTasks = [...task];
        [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
        setTask(updateTasks);
       }
    }
    function taskDown(index){
       if(index < task.length - 1) {
        const updateTasks = [...task];
        [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
        setTask(updateTasks);
    }
}
    return(<div>
        <h1>To-Do List</h1>
        <div>
        <input onChange={handleInput} type="text" value={newTask} placeholder="Enter Task..."/>
        <button onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {task.map((t, index) =>
                 <li key={index}>
                    <span>{t}</span>
                    <button onClick={() => removeTask(index)}>Remove</button>
                    <button onClick={() => taskUp(index)}>☝️</button>
                    <button onClick={() => taskDown(index)}>👇</button>
                 </li>)}
        </ol>
    </div>);
}
export default ToDoList;