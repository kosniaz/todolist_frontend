import React, { useState } from 'react';

function TaskForm({ taskId,  onSubmitForm, onSubmitLabel, defaultTitle = '' , defaultDescription = '' , keepValues = false}) {
    console.log("Run taskform");
    console.log(defaultTitle);
    
    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);
    const handleSubmit = (e) => {
        e.preventDefault();
        var task;
        if ( keepValues === false ) {
            task = {
                title,
                description
            }
            onSubmitForm(task);
            setTitle('');  // Clear input field
            setDescription('');  // Clear input field
        } else {
            task = {
                id: taskId,
                title,
                description
            }
            console.log(taskId);
            onSubmitForm(task);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add the task description"
            />
            <button type="submit">{onSubmitLabel}</button>
        </form>
    );
}

export default TaskForm;
