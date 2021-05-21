import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';

type TaskFormProps = {
    tasks : Array<string>,
    setTask: Function
}

function TaskForm (props : TaskFormProps) {
    let [newTask, setNewTask] = React.useState("");

    let handleSubmit = (evt) => {
        evt.preventDefault();
        let newData = [...props.tasks, newTask];
        props.setTask(newData);
        localStorage.setItem("tasks", JSON.stringify(newData));
    }

    return (
        <Jumbotron className="mt-3">
            <h1 className="text-center mt-3 mb-5">
                Welcome to Tasker Application
            </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Row className="align-items-center justify-content-center">
                    <Col sm={8} className="my-1">
                        <Form.Control id="task" placeholder="Insert your task here" onChange={e => setNewTask(e.target.value)}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                      <Button type="submit" >Add Task</Button>
                    </Col>
                 </Form.Row>
            </Form>
        </Jumbotron>
    )
}

TaskForm.displayName = "TaskForm";

export {
    TaskForm
}
