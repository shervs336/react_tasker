import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type TaskItemProps = {
    task : string,
    taskKey: number,
    removeTask: Function
}

function TaskItem(props : TaskItemProps) {
    return (
        <li className="list-group-item position-relative">
            <Form.Group controlId="formBasicCheckbox" className="mb-0">
                <Form.Check type="checkbox" label={props.task} />
            </Form.Group>
            <Button onClick={() => props.removeTask(props.taskKey)} variant="danger" size="sm" className="position-absolute" style={{top:'50%', right: '1.25rem', transform:'translateY(-50%)'}}>
                Remove
            </Button>
        </li>
    )
}

TaskItem.displayName = "TaskItem";

export {
    TaskItem
}
