import React, { useState } from "react";
import { Task } from "../interface/task";
import { Button } from "react-bootstrap";

export function AddTask({taskList, setTaskList}:{taskList:Task[], setTaskList:(newTaskList: Task[]) => void;}):  JSX.Element {
    const [title, setTitle] = useState("add title");
    const [details, setDetails] = useState("add details")
    
    function addTask() {
        setTaskList(taskList.concat({id: taskList.length + 1, title, details, position: "area1"}))
    }

    return (
    <div>
        <h1>Task</h1>
        <p>title</p>
        <input type="text" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
        <p>details</p>
        <input type="text" value = {details} onChange = {(e) => setDetails(e.target.value)}/>
        <p></p>
        <Button onClick={addTask}>Add</Button>
    </div>);
}

export default AddTask;

