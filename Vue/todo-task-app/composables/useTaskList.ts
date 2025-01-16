import { defineStore } from "pinia";

export type TheTask = {
    description: string;
    id: string;
    completed: boolean;
}

export const useTaskList = defineStore('taskList', () => {

    const tasksList = ref<TheTask[]>([]);
    const allTasksCheckbox = ref(false);

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

    const checkTask = (checked: boolean, checkedTask: TheTask) => {
        const updateCheckedTask = {
            description: checkedTask.description,
            id: checkedTask.id,
            completed: checked,
        }

        tasksList.value.splice(tasksList.value.findIndex((task: TheTask) => task.id === checkedTask.id), 1, updateCheckedTask);
        if(checked === false) {
            allTasksCheckbox.value = checked;
        } else if (!tasksList.value.some((task) => task.completed === false)) {
            allTasksCheckbox.value = true;
        }
    }

    const checkAllTasks = (checked: boolean) => {
        allTasksCheckbox.value = checked;
        tasksList.value.map((task, index) => {
            const updateCheckedTask = {
                description: task.description,
                id: task.id,
                completed: checked,
            }
            return tasksList.value.splice(index, 1, updateCheckedTask);
        })
    }

    return {
        tasksList,
        addNewTask,
        removeTask,
        removeAllTasks,
        allTasksCheckbox,
        checkTask,
        checkAllTasks
    };
}, {
    persist: true,
});