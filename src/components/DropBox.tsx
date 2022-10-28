import React from "react";
import { Box } from "@mui/system";
import { useDrop } from "react-dnd";
import itemTypes from "../utilities/itemTypes";
import { Task } from '../interface/task';

export interface BoxTargetProps {
    boxId: string;
    children: React.ReactNode;
    changeStatus:(id:number,status:string) => void
}



const BoxTarget = (props:BoxTargetProps) => {
    const boxId = props.boxId;
    const children = props.children;
    const changeStatus = props.changeStatus;
    const [, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item: Task,monitor) => changeStatus(item.id,boxId),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })
    
    return (
        <Box
            ref={drop}
            sx={{
            width: 300,
            height: 300,
            backgroundColor: 'white',
            border: '1px dashed gray',
            }}
        >
            <div><h2>{boxId}</h2></div>
            { children } 

        </Box>
    )
}

export default BoxTarget;