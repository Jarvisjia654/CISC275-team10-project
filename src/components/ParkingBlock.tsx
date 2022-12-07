import React from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utilities/itemTypes";
import { Task } from "../interface/task";
import { Vehicle } from "./ParkingVehicle";

export interface ParkingBlockProps {
  boxId: string;
  taskList: Task[];
  setTaskList: (newTaskList: Task[]) => void;
  changeStatus: (id: number, status: string) => void;
  checkOut: (id: number) => void;
}

const ParkingBlock = (props: ParkingBlockProps) => {
  const boxId = props.boxId;
  const taskList = props.taskList;
  const changeStatus = props.changeStatus;
  const setTaskList = props.setTaskList;
  const available = taskList.filter((task) => task.position === boxId).length;
  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    canDrop: () => available===0,
    drop: (item: Task, monitor) => changeStatus(item.id, boxId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });



  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        border: "1px solid black"
    }}
    >
      <div>
        {/* <p>{boxId}</p> */}
        {taskList
              .filter((task) => task.position === boxId)
              .map((task) => (
                <Vehicle
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  details={task.details}
                  tasklist={taskList}
                  setTaskList={setTaskList}
                  checkOut={props.checkOut}
                />
                // <div>
                //     {/* <h3>{task.title}</h3>
                //     <Button className="btn btn-default" onClick={() => leave(task.id, task.price)}>Leave</Button> */}
                // </div>
              ))}
      </div>
    </div>
  );
};

export default ParkingBlock;