import React from 'react';

interface Props {
    title: string,
    onClick: () => void,
    color?: string,
}

const Button: React.FC<Props> = (props) => {
    return (
        <button style={{backgroundColor: props.color || 'black'}}
                className='btn'
                onClick={props.onClick}>{props.title}
        </button>
    )
};

export default Button
