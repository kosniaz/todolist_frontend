import TaskForm from './TaskForm.js';
function TaskList({ tasks, taskUpdateAction, keepValues= false}) {
    console.log("Run tasklist");
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}> <TaskForm taskId={task.id} onSubmitForm={taskUpdateAction} defaultTitle={task.title} defaultDescription={task.description} keepValues={keepValues}/> </li>
            ))}
        </ul>
    );
}

export default TaskList;
