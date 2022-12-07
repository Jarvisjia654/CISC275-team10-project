import React, { useState } from "react";
import { Task } from "../interface/task";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../styles.css";
import services from "../utilities/services";
// import carTypes from "../utilities/carTypes";

export function AddTask({taskList, setTaskList}:{taskList:Task[], setTaskList:(newTaskList: Task[]) => void;}):  JSX.Element {
    const [title, setTitle] = useState("Sedan");
    const [details, setDetails] = useState("$ 0")
    const options = ["Sedan", "SUV", "Truck"];
    let  factor = 0;
    if (title === "Sedan") {
        factor = 1;
    } else if (title === "SUV") {
        factor = 2;
    } else if (title === "Truck") {
        factor = 3;
    }

    
    const [checkedState, setCheckedState] = useState(
        new Array(services.length).fill(false)
      );
    
    const [total, setTotal] = useState(0);

    function handleType(event: React.ChangeEvent<HTMLSelectElement>) {
        setTitle(event.target.value);
    };

    const handlePrice = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
            if (currentState === true) {
                return sum + services[index].price*factor;
            }
            return sum;
            },
        0
    );

    setTotal(totalPrice);
    let parkinghour = totalPrice/factor/10;
    setDetails(parkinghour.toString().concat(' hours'));
    };

    function addTask() {
        setTaskList(taskList.concat({id: taskList.length + 1, title, details, position: "area1", price: total}))
    }

    return (
        <div className="AddTask">
            <h1>Add New Reservation</h1>
            <Form.Group controlId="options">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select value={title} onChange={handleType}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
            </Form.Group>
            <h4>${10*factor} per hour</h4>
            <ul className="toppings-list">
                {services.map(({ name, price }, index) => {
                return (
                    <li key={index}>
                    <div className="toppings-list-item">
                        <div className="left-section">
                        <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handlePrice(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name} ${price*factor}</label>
                        </div>
                    </div>
                    </li>
                );
                })}
                <li>
                    <div className="toppings-list-item">
                        <div className="left-section">Total:</div>
                        <div className="right-section">${total}</div>
                    </div>
                </li>
            </ul>
            <Button  onClick={addTask}>Add</Button>
        </div>);
}

export default AddTask;

