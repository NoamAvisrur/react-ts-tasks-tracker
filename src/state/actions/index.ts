import { ITask } from '../../models/task-model';
import { ActionTypes } from '../action-types';

interface IInitTasksAction {
    type: ActionTypes.INIT_TASKS,
    payload: ITask[]
};

interface IAddNewTasksAction {
    type: ActionTypes.ADD_NEW_TASK,
    payload: ITask
};

interface IDeleteTasksAction {
    type: ActionTypes.DELETE_TASK,
    payload: string
};

interface IUpdateTasksAction {
    type: ActionTypes.UPDATE_TASK,
    payload: string
};

export type Action = IInitTasksAction | IAddNewTasksAction | IDeleteTasksAction | IUpdateTasksAction;
