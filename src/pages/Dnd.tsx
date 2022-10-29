import React, { useState } from "react";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { TaskCard } from "../components/TaskCard";
import { Task } from "../interface/task";
import BoxTarget from "../components/DropBox";
import AddTask from "../components/AddTask";

const Dnd = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, title: "Task 1", position: "area1", details: "details" },
    { id: 2, title: "Task 2", position: "area1", details: "details" },
    { id: 3, title: "Task 3", position: "area1", details: "details" },
    { id: 4, title: "Task 4", position: "area1", details: "details" },
  ]);
  const changeStatus = (taskId: number, boxId: string) => {
    const draggedTask = taskList.find((task) => task.id === taskId);
    console.log(draggedTask);
    if (draggedTask) {
      draggedTask.position = boxId;
      setTaskList(
        taskList.filter((task) => task.id !== taskId).concat(draggedTask)
      );
    }
  };
  return (
    <>
      <DndProvider backend={Backend}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <BoxTarget boxId={"area1"} changeStatus={changeStatus}>
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

          <BoxTarget boxId={"area2"} changeStatus={changeStatus}>
            {taskList
              .filter((task) => task.position === "area2")
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
        </div>
      </DndProvider>
      <AddTask taskList={taskList} setTaskList={setTaskList}></AddTask>
      <div style={{ color: "black" }}>
        <h2>Team 10 Sprint Planning 1</h2>
        <ul className="completedList">
          <li>
            {" "}
            Basic layout of the page, and the drag and drop function.(finished)
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dnd;
