import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);



 // Fetch tasks from the backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8000/tasks/')
            .then(response => {
                setTasks(response.data);  // Assuming the backend returns a list of tasks
            })
            .catch(error => {
                console.error('There was an error fetching the tasks:', error);
            });
    }, []);  // Empty dependency array ensures this effect runs only once, when the component mounts

    const addTask = (task) => {
        axios.post('http://localhost:8000/tasks', task)
            .then(response => {
                const newTask = response.data;
                setTasks([...tasks, newTask]);
            })
            .catch(error => {
                console.error('There was an error adding the task:', error);
            });
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};
//function App() {
//    const [tasks, setTasks] = useState([]);
//
//    useEffect(() => {
//        axios.get('/api/tasks')
//            .then(response => setTasks(response.data))
//            .catch(error => console.error(error));
//    }, []);
//
//    return (
//        <div>
//            <TaskList tasks={tasks} />
//        </div>
//    );
//}
export default App;
