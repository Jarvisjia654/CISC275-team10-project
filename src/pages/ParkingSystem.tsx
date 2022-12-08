import React, { useState } from "react";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { TaskCard } from "../components/TaskCard";
import Parking from "../components/Parking";
import { Task } from "../interface/task";
import BoxTarget from "../components/ReservationList";
import AddTask from "../components/AddTask";


const Dnd = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskCount, setTaskCount] = useState(0);

  const changeStatus = (taskId: number, boxId: string) => {
    const draggedTask = taskList.find((task) => task.id === taskId);
    // console.log(draggedTask);
    // console.log(boxId);
    if (draggedTask) {
      draggedTask.position = boxId;
      setTaskList(
        taskList.filter((task) => task.id !== taskId).concat(draggedTask)
      )
    }
  };

  const checkOut = (id: number) => {
    const checkOutV = taskList.filter((task) => task.id === id);
    setTaskCount(taskCount + checkOutV[0].price);
  };

  return (
    <div>
    <>
      <DndProvider backend={Backend}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "20px 0" }}>
          <BoxTarget boxId={"Reservation List"} changeStatus={changeStatus}>
            {taskList
              .filter((task) => task.position === "area1")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  details={task.details}
                  tasklist={taskList}
                  setTaskList={setTaskList}
                />
              ))}
          </BoxTarget>
        
          <div style={{
                    width: "500px",
                    height: "500px",
                    margin: "0 40px",
                    border: "1px solid gray"
                  }}
              >
                <Parking taskList = {taskList} changeStatus={changeStatus} setTaskList = {setTaskList} checkOut = {checkOut} />
          </div>

          <div style={{
                    width: "300px",
                    height: "500px",
                    margin: "0 40px",
                    border: "1px solid gray",
                    textAlign: "center",
                  }}> 
                <h1>Total Revnue</h1>
                <p></p>
                <h2>$ {taskCount}</h2> 
                {taskList
                  .filter((task) => task.position === "area1")
                  .map((task) => (
                    <div>
                      <p>One {task.title} is waiting</p>
                    </div>
                 ))}
                 {taskList
                  .filter((task) => task.position !== "area1")
                  .map((task) => (
                    <div>
                      <p>One {task.title} is in spot {task.position}</p>
                    </div>
                 ))}
  
                  
          </div>
        </div>
      </DndProvider>
      <AddTask taskList={taskList} setTaskList={setTaskList}></AddTask>
      
    </>
  </div>
  );
};

export default Dnd;
