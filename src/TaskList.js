function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.title}</li>
            ))}
        </ul>
    );
}

export default TaskList;
