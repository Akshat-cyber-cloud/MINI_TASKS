import { useState } from "react";

const INITIAL_TASKS = [
    {
        id: '1',
        title: 'Prepare React Interview Notes',
        description: 'Review Hooks, Routing, and State Management',
        status: 'pending',
        priorty: 'High'
    },
    {
        id: '2',
        title: 'Submit Expense Report',
        description: 'Fill in the pending travel expenses',
        status: 'pending',
        priorty: 'Medium'
    },
    {
        id: '3',
        title: 'Team Standup',
        description: 'Daily standup meeting',
        status: 'completed',
        priorty: 'Low'
    },
];

export function useTask() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const addTask = (newTask) => {
        const task = {
            id: Date.now().toString(),
            status: 'pending',
            ...newTask,
        };
        setTasks((prev) => [task, ...prev]);
    };

    const getTaskById = (id) => {
        return tasks.find((t) => t.id === id);
    }

    const updateTask = (id, updatedFields) => {
        setTasks(prev =>
            prev.map((task) =>
                task.id === id ? { ...task, ...updatedFields } : task
            )
        );
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return {
        tasks,
        addTask,
        getTaskById,
        updateTask,
        deleteTask
    };
}