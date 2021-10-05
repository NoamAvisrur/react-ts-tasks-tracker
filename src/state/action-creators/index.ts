import { ITask } from '../../models/task-model';
import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';

export const initTasksAction = (tasks: ITask[]) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.INIT_TASKS,
            payload: tasks
        })
    }
};

export const addTaskAction = (task: ITask) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.ADD_NEW_TASK,
            payload: task
        })
    }
};

export const deleteTaskAction = (taskId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.DELETE_TASK,
            payload: taskId
        })
    }
};

export const updateTaskAction = (taskId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.UPDATE_TASK,
            payload: taskId
        })
    }
};
