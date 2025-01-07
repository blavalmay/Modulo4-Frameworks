import { defineStore } from "pinia";

export const useTaskList = defineStore('taskList', () => {

    const tasksList = ref<string[]>([]);

    const addNewTask = (task: string) => tasksList.value.push(task);

    const generateTaskId = () => {
        return Math.random().toString(36).substring(2, 15);
    };

    return {
        tasksList,
        addNewTask,
        generateTaskId
    };
}, {
    persist: true,
});