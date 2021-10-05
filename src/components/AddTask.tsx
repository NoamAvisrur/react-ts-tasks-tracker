import React, {useState} from 'react';
import {ITask} from '../models/task-model';

interface Props {
    onAddTask: (task: ITask) => void
};

const AddTask: React.FC<Props> = ({onAddTask}) => {
    const [text, setText] = useState<string>('')
    const [day, setDay] = useState<string>('')
    const [reminder, setReminder] = useState<boolean>(false)

    const onSubmit = (event: any): void => {
        event.preventDefault();
        if (!text || !day) {
            alert('Please add a task text and date');
            return;
        }
        const newTask: ITask = {
            id: '',
            text: text,
            date: day,
            reminder: reminder
        };
        onAddTask(newTask);
        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                value={text} onChange={(e: any) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Day & Time'
                       value={day} onChange={(e: any) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}
                       onChange={(e: any) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
