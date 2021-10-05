import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { ITask } from './models/task-model';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const TasksRequestUrl = 'http://localhost:5000/tasks';
const TasksRequestHeaders = { 'Content-type': 'application/json' };

const App: React.FC = () => {
  const [isShowAddTask, setIsShowAddTask] = useState<boolean>(true);
  const state = useSelector((state: any) => state);

  const dispatch = useDispatch();
  const { initTasksAction, addTaskAction, deleteTaskAction, updateTaskAction } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks: ITask[] = await fetchTasks();
      initTasksAction(fetchedTasks);
    };
    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async (): Promise<ITask[]> => {
    const res = await fetch(TasksRequestUrl);
    const data: ITask[] = await res.json();
    return data;
  };

  // add new task
  const addTask = async (task: ITask) => {
    const res = await fetch(TasksRequestUrl, {
      method: 'POST',
      headers: TasksRequestHeaders,
      body: JSON.stringify(task)
    });
    if (res.status === 201) {
      addTaskAction(task);
    }
  };

  // delete task
  const deleteTask = async (id: string) => {
    const res = await fetch(`${TasksRequestUrl}/${id}`, {method: 'DELETE'});
    if (res.status === 200) {
      deleteTaskAction(id);
    }
  };

  // toggle task reminder
  const toggleReminder = async (id: string) => {
    const taskToToggle: ITask | undefined = state.tasks.find((task: ITask) => task.id === id);
    if (taskToToggle) {
      const res = await fetch(`${TasksRequestUrl}/${id}`, {
        method: 'PUT',
        headers: TasksRequestHeaders,
        body: JSON.stringify({...taskToToggle, reminder: !taskToToggle.reminder})
      });

      if (res.status === 200) {
        updateTaskAction(id);
      }
    }
  };

  return (
    <Router>
      <div className="container">
        <Header isShowAddButton={isShowAddTask} onAddClicked={() => setIsShowAddTask(!isShowAddTask)}/>
        <Route path='/' exact render={(() => (
            <>
              {isShowAddTask && <AddTask onAddTask={addTask}/>}
              <Tasks tasks={state.tasks}
                     onDelete={deleteTask}
                     onToggleReminder={toggleReminder}/>
            </>
        ))} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
