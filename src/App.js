import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import axios from 'axios';

function App() {
    console.log("Run App");
    const [tasks, setTasks] = useState([]);



 // Fetch tasks from the backend when the component mounts
    useEffect(() => {
        console.log("Run useEffect");
        axios.get('http://localhost:8000/tasks/')
            .then(response => {
                setTasks(response.data);  // Assuming the backend returns a list of tasks
            })
            .catch(error => {
                console.error('There was an error fetching the tasks:', error);
            });
    }, []);  // Empty dependency array ensures this effect runs only once, when the component mounts

    const addTask = (task) => {
        console.log("Run addTask");
        axios.post('http://localhost:8000/tasks/', task)
            .then(response => {
                const newTask = response.data;
                setTasks([...tasks, newTask]);
            })
            .catch(error => {
                console.error('There was an error adding the task:', error);
            });
    };
    const updateTask = (task) => {
        console.log("Run updateTask with task id = " + task.id);
        const newtask = {
            id: task.id,
            title: task.title,
            description: task.description,
            completed: true
        }
        axios.put('http://localhost:8000/tasks/'+task.id, newtask)
            .then(response => {
                console.log('task with id = ' + task.id + ' updated successfully to db');
            })
            .catch(error => {
                console.error('There was an error adding the task:', error);
            });
    };

    
    return (
        <div>
            <TaskForm onSubmitForm={addTask} />
            <TaskList tasks={tasks} taskUpdateAction={updateTask} keepValues={true} />
        </div>
    );
};
export default App;
