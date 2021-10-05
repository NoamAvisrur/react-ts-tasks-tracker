import React from 'react';
import Button from './Button';
import {useLocation} from 'react-router';

interface Props {
    isShowAddButton: boolean
    onAddClicked: () => void
}
const Header: React.FC<Props> = ({isShowAddButton, onAddClicked}) => {
    const location = useLocation();

    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' &&
                <Button color='green' title={isShowAddButton ? 'Close' : 'Add'} onClick={onAddClicked}/>
            }
        </div>
    )
};

export default Header;
