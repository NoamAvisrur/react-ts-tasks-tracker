import React from 'react';
import { ITask } from '../models/task-model';
import { FaTimes } from 'react-icons/fa'

interface Props {
    task: ITask,
    onDelete: (id: string) => any;
    onToggleReminder: (id: string) => any;
}
const Task: React.FC<Props> = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
            <h3>{task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer'}}
                        onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.date}</p>
        </div>
    )
};

export default Task
