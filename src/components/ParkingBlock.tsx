import React from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utilities/itemTypes";
import { Task } from "../interface/task";
import { Button } from "react-bootstrap";

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
  const checkOut = props.checkOut;
  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item: Task, monitor) => changeStatus(item.id, boxId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
   function leave(id: number, price: number) {
    checkOut(price);
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

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
        <p>{boxId}</p>
        {taskList
              .filter((task) => task.position === boxId)
              .map((task) => (
                <div>
                    <h3>{task.title}</h3>
                    <Button className="btn btn-default" onClick={() => leave(task.id, task.price)}>Leave</Button>
                </div>
              ))}
      </div>
    </div>
  );
};

export default ParkingBlock;