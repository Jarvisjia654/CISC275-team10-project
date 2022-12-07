/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Box from "@mui/material/Box";
import { useDrag } from "react-dnd";
import itemTypes from "../utilities/itemTypes";
import { Button } from "react-bootstrap";
import "../styles.css";
import { Task } from "../interface/task";

export const Vehicle = ({
  id,
  title,
  details,
  tasklist,
  setTaskList,
  checkOut
}: {
  id: number;
  title: string;
  details: string;
  tasklist: Task[];
  setTaskList: (newTaskList: Task[]) => void;
  checkOut: (id: number) => void;
}) => {
  function deleteTask() {
    const newTaskList = tasklist.filter((task) => task.id !== id);
    setTaskList(newTaskList);
    checkOut(id);
    
  }

  let path = require("../img/Sedan.png")
  if (title === "Sedan") {
    path = require("../img/Sedan.png")
  } else if (title === "SUV") {
    path = require("../img/SUV.png")
  } else if (title === "Truck") {
    path = require("../img/Truck.png")
  }


  const [, drag] = useDrag({
    type: itemTypes.CARD,
    item: {
      id,
      title,
      details,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="Task" ref={drag}>
        
      <Box
        sx={{
          width: 80,
          height: 80,
          // backgroundColor: "white",
          textAlign: "center",
          margin: "0 0px",
          // border: "1px black solid",
        }}
      >
        <img
            src={path}
            width="100"
            height="60"
          />
        {/* <li>{"../img/".concat(title).concat(".png")}</li> */}
        <Button className="btn btn-default" onClick={deleteTask}>leave</Button>
      </Box>
    </div>
  );
};