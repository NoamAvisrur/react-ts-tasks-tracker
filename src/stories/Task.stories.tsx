import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button from '../components/Button';
import Task from '../components/Task';
import {ITask} from '../models/task-model';

interface Props {
    task: ITask,
    onDelete: (id: string) => any;
    onToggleReminder: (id: string) => any;
}

const meta: Meta = {
    title: 'Task',
    component: Task
}

export default meta;

const Template: Story<Props> = (args: any) => <Task {...args} />

export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
        text: 'task name',
        date: 'date and time',
        reminder: true
    },
    onDelete: () => {},
    onToggleReminder: () => {}
}
