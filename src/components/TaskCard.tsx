import React from "react";
import Box from "@mui/material/Box";
import { useDrag } from "react-dnd";
import itemTypes from "../utilities/itemTypes";
import { Button } from "react-bootstrap";
import "../styles.css";
import { Task } from "../interface/task";

export const TaskCard = ({
  id,
  title,
  details,
  tasklist,
  setTaskList,
}: {
  id: number;
  title: string;
  details: string;
  tasklist: Task[];
  setTaskList: (newTaskList: Task[]) => void;
}) => {
  function deleteTask() {
    const newTaskList = tasklist.filter((task) => task.id !== id);
    setTaskList(newTaskList);
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
    <div className="Task">
      <Box
        ref={drag}
        sx={{
          width: 150,
          height: 50,
          backgroundColor: "white",
          border: "1px dashed gray",
        }}
      >
        <li>{title}</li>
        <li>{details}</li>
      </Box>
      <Button onClick={deleteTask}>delete</Button>
    </div>
  );
};
