import React from "react";
import { useTask } from "../hooks/useTasks";

function Tasks() {

    const { tasks, addTask, deleteTask } = useTask();

    return (
        <>
            <h1>Task Page</h1>

            <div className="task-list">
                {tasks.map((task) => (
                    <div key={task.id} className="task-card">
                        <h4 className="task-title">{task.title}</h4>
                        <p className="task-desc">{task.description}</p>
                        <p>Status : {task.status}</p>
                        <p>Priority : {task.priorty}</p>

                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Tasks;