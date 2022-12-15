import React, { useState } from "react";
import { Task } from "../interface/task";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../styles.css";
import services from "../utilities/services";
// import carTypes from "../utilities/carTypes";

export function AddTask({taskList, setTaskList}:{taskList:Task[], setTaskList:(newTaskList: Task[]) => void;}):  JSX.Element {
    const [title, setTitle] = useState("Civic");
    const [details, setDetails] = useState("0 hours")
    const options = ["Civic", "Altima", "Maxima", "Miata", "Monte Carlo", "Prius", "Challenger", "Charger", "Camaro", "Caprise", "Acadia", "Cherokee", "RAV4", "Journey", "Sorento", "CR-V", "Grand Cherokee", "CX-5", "Explorer", "Edge", "Silverado", "F-150", "F-250", "Colorado", "Tundra", "Sierra", "Tacoma", "Ranger", "Titan", "Avalanche" ];
    let factor = 0;
    if ((title === "Civic") || (title === "Altima") || (title === "Maxima") || (title === "Miata") || (title === "Monte Carlo") || (title === "Prius") || (title === "Challenger") || (title === "Charger") || (title === "Camaro") || (title === "Caprise")) {
        factor = 1;
    } else if ((title === "Acadia") || (title === "Cherokee") || (title === "RAV4") || (title === "Journey") || (title === "Sorento") || (title === "CR-V") || (title === "Grand Cherokee") || (title === "CX-5") || (title === "Explorer") || (title === "Edge")) {
        factor = 2;
    } else if ((title === "Silverado") || (title === "F-150") || (title === "F-250") || (title === "Colorado") || (title === "Tundra") || (title === "Sierra") || (title === "Tacoma") || (title === "Ranger") || (title === "Titan") || (title === "Avalanche")) {
        factor = 3;
    }

    const newList = [...taskList];
    const dupList = [...newList];

    

    function typeSort(): void{
        const x = dupList.filter((t: Task): boolean => (t.title === "Civic") || (t.title === "Altima") || (t.title === "Maxima") || (t.title === "Miata") || (t.title === "Monte Carlo") || (t.title === "Prius") || (t.title === "Challenger") || (t.title === "Charger") || (t.title === "Camaro") || (t.title === "Caprise"));
        const y = dupList.filter((t: Task): boolean => (t.title === "Acadia") || (t.title === "Cherokee") || (t.title === "RAV4") || (t.title === "Journey") || (t.title === "Sorento") || (t.title === "CR-V") || (t.title === "Grand Cherokee") || (t.title === "CX-5") || (t.title === "Explorer") || (t.title === "Edge"));
        const z = dupList.filter((t: Task): boolean => (t.title === "Silverado") || (t.title === "F-150") || (t.title === "F-250") || (t.title === "Colorado") || (t.title === "Tundra") || (t.title === "Sierra") || (t.title === "Tacoma") || (t.title === "Ranger") || (t.title === "Titan") || (t.title === "Avalanche"));
        const a = x.concat(y);
        const b = a.concat(z);
        setTaskList(b);
        console.log(taskList);
    }

    function revTypeSort(): void{
        const x = dupList.filter((t: Task): boolean => (t.title === "Silverado") || (t.title === "F-150") || (t.title === "F-250") || (t.title === "Colorado") || (t.title === "Tundra") || (t.title === "Sierra") || (t.title === "Tacoma") || (t.title === "Ranger") || (t.title === "Titan") || (t.title === "Avalanche"));
        const y = dupList.filter((t: Task): boolean => (t.title === "Acadia") || (t.title === "Cherokee") || (t.title === "RAV4") || (t.title === "Journey") || (t.title === "Sorento") || (t.title === "CR-V") || (t.title === "Grand Cherokee") || (t.title === "CX-5") || (t.title === "Explorer") || (t.title === "Edge"));
        const z = dupList.filter((t: Task): boolean => (t.title === "Civic") || (t.title === "Altima") || (t.title === "Maxima") || (t.title === "Miata") || (t.title === "Monte Carlo") || (t.title === "Prius") || (t.title === "Challenger") || (t.title === "Charger") || (t.title === "Camaro") || (t.title === "Caprise"));
        const a = x.concat(y);
        const b = a.concat(z);
        setTaskList(b);
        console.log(taskList);
    }

    function hourSort(): void{
        const w = dupList.filter((t: Task): boolean => t.details === "0 hours");
        const x = dupList.filter((t: Task): boolean => t.details === "1 hours");
        const y = dupList.filter((t: Task): boolean => t.details === "2 hours");
        const z = dupList.filter((t: Task): boolean => t.details === "3 hours");
        const c = dupList.filter((t: Task): boolean => t.details === "4 hours");
        const d = dupList.filter((t: Task): boolean => t.details === "5 hours");
        const e = dupList.filter((t: Task): boolean => t.details === "6 hours");
        const a = w.concat(x);
        const b = a.concat(y);
        const f = b.concat(z);
        const g = f.concat(c);
        const h = g.concat(d);
        const i = h.concat(e);
        setTaskList(i);
        console.log(taskList);
    }

    function revHourSort(): void{
        const w = dupList.filter((t: Task): boolean => t.details === "6 hours");
        const x = dupList.filter((t: Task): boolean => t.details === "5 hours");
        const y = dupList.filter((t: Task): boolean => t.details === "4 hours");
        const z = dupList.filter((t: Task): boolean => t.details === "3 hours");
        const c = dupList.filter((t: Task): boolean => t.details === "2 hours");
        const d = dupList.filter((t: Task): boolean => t.details === "1 hours");
        const e = dupList.filter((t: Task): boolean => t.details === "0 hours");
        const a = w.concat(x);
        const b = a.concat(y);
        const f = b.concat(z);
        const g = f.concat(c);
        const h = g.concat(d);
        const i = h.concat(e);
        setTaskList(i);
        console.log(taskList);
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
        setTaskList(taskList.concat({id: taskList.length + 1, title, details, position: "area1", price: total, on: true, features: []}))
    }

    return (
        <div>
            <div>
                <Button onClick={typeSort}>Sort by Smallest</Button>
                <Button onClick={hourSort}>Sort by Least Hours</Button>
                <Button onClick={revTypeSort}>Sort by Biggest</Button>
                <Button onClick={revHourSort}>Sort by Most Hours</Button>
            </div>
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
        </div>
        </div>);
}

export default AddTask;

