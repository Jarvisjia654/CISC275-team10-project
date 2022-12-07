import React from "react";
import { Box } from "@mui/system";

export interface BoxTargetProps {
  boxId: string;
  children: React.ReactNode;
  changeStatus: (id: number, status: string) => void;
}

const BoxTarget = (props: BoxTargetProps) => {
  const boxId = props.boxId;
  const children = props.children;
  // const changeStatus = props.changeStatus;
  // const [, drop] = useDrop({
  //   accept: itemTypes.CARD,
  //   drop: (item: Task, monitor) => changeStatus(item.id, boxId),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // });

  return (
    <Box
      // ref={drop}
      sx={{
        width: 300,
        height: 500,
        border: "1px solid gray",
      }}
    >
      <div>
        <h1>{boxId}</h1>
      </div>
      {children}
    </Box>
  );
};

export default BoxTarget;
