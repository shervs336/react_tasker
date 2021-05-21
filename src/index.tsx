import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TaskForm } from './task_form';
import { TaskList } from './task_list';
import Container from 'react-bootstrap/container';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", JSON.stringify([]));
}

function TaskApp () {

    const [tasks, setTask] = React.useState(JSON.parse(localStorage.getItem("tasks")));

    return(
        <Container>
            <TaskForm tasks={tasks} setTask={setTask}/>
            <TaskList tasks={tasks} setTask={setTask} />
        </Container>
    );
}


ReactDOM.render(
    <TaskApp />,
    document.querySelector('#root')
);
