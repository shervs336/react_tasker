import * as React from 'react';
import { TaskItem } from './task_item';

type TaskListProps = {
    tasks : Array<string>,
    setTask: Function,
}

function TaskList(props : TaskListProps) {
    let removeTask = (id) => {
        let newTasks = props.tasks.filter(function(value, index){
            return index != id;
        })
        props.setTask([...newTasks]);
        localStorage.setItem("tasks", JSON.stringify([...newTasks]));

    }

    return (
        <ul className="list-group">
            {props.tasks.map((task, index) => {
                return <TaskItem task={task} removeTask={removeTask} taskKey={index}/>
            })}
        </ul>
    )
}

TaskList.displayName = "TaskList";

export {
    TaskList
}
