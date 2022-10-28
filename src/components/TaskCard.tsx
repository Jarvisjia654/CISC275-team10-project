import React from 'react'
import Box from '@mui/material/Box';
import { useDrag } from 'react-dnd';
import itemTypes from '../utilities/itemTypes';

const TaskCard = ({id,title,details}:{id:number,title:string,details:string}) => {
    const [,drag] = useDrag({
        type: itemTypes.CARD,
        item: {
            id,
            title,
            details
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <Box
            ref={drag}
            sx={{
            width: 150,
            height: 50,
            backgroundColor: 'white',
            border: '1px dashed gray',
            }}
        >
            <ul>
                <li>{title}</li>
                <li>{details}</li>
            </ul>
        </Box>
    )
}

export default TaskCard;
