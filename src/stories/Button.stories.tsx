import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button from '../components/Button';

interface Props {
    title: string,
    onClick: () => void,
    color?: string,
}

const meta: Meta = {
    title: 'Button',
    component: Button
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'click me',
    color: 'red',
    onClick: () => {}
}
