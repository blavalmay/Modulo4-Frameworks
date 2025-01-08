import { defineStore } from "pinia";

type TheTask = {
    description: string;
    id: string;
    completed: boolean;
}

export const useTaskList = defineStore('taskList', () => {

    const tasksList = ref<TheTask[]>([]);

    const addNewTask = (task: string) => {
        const taskId = Math.random().toString(36).substring(2, 15);
        return tasksList.value.push({description: task, id: taskId, completed: false});
    }

    const removeTask = (taskId: string) => {
        return tasksList.value.splice(tasksList.value.findIndex((task: TheTask) => task.id === taskId), 1);
    }

    const removeAllTasks = () => {
        return tasksList.value.splice(0, tasksList.value.length);
    }

    return {
        tasksList,
        addNewTask,
        removeTask,
        removeAllTasks,
    };
}, {
    persist: true,
});