import React from 'react';
import { ITask } from '../models/task-model';
import Task from './Task';

interface Props {
    tasks: ITask[],
    onDelete: (id: string) => any,
    onToggleReminder: (id: string) => any
};

const Tasks: React.FC<Props> = (props) => {
    return (
        <>
            {props.tasks.length > 0 ?
                <div className='tasks-container'>
                {props.tasks.map((task: ITask) => (
                    <Task key={task.id} task={task}
                          onDelete={props.onDelete}
                          onToggleReminder={props.onToggleReminder}/>
                ))}
                </div> : <p>no tasks</p>}
        </>
    )
};

export default Tasks
