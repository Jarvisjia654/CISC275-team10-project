import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Task } from "../interface/task";
import ParkingBlock from "./ParkingBlock";



export interface ParkingProps {
    taskList: Task[];
    setTaskList: (newTaskList: Task[]) => void;
    changeStatus: (id: number, status: string) => void;
    checkOut: (id: number) => void;
  }

const renderSquare = (i: number, j: number, changeStatus:any, taskList:any, setTaskList:any, checkOut:any) => {
    const x = i;
    const y = j;
    const boxId = x.toString().concat(y.toString());
    return (
        <div key={i*10+j} style={{ width: "16.666%", height: "16.666%" }}>
            <ParkingBlock boxId = {boxId} changeStatus={changeStatus} taskList = {taskList} setTaskList = {setTaskList} checkOut = {checkOut}></ParkingBlock>
        </div>
    );
};


const Parking = (props: ParkingProps) => {
    const changeStatus = props.changeStatus;
    const setTaskList = props.setTaskList;
    const checkOut = props.checkOut;
    const taskList = props.taskList;
    const squares = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            squares.push(renderSquare(i, j, changeStatus, taskList, setTaskList, checkOut));
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Parking;