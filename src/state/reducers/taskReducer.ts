import {ITask} from '../../models/task-model';
import {Action} from '../actions';
import {ActionTypes} from '../action-types';

const reducer = (state: ITask[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.INIT_TASKS:
            return [...action.payload];
        case ActionTypes.ADD_NEW_TASK:
            return [...state, action.payload];
        case ActionTypes.DELETE_TASK:
            return state.filter((task: ITask) => task.id !== action.payload);
        case ActionTypes.UPDATE_TASK:
            return state.map((task: ITask) => task.id === action.payload ?
                {...task, reminder: !task.reminder} : task);
        default:
            return state;
    }
};

export default reducer;
