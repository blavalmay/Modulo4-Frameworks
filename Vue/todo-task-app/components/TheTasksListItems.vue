<template>
    <div class="p-3 pb-1 mt-3 rounded border">
        <p 
        v-if="taskList.tasksList.length === 0" class="font-light mb-2">The task list is empty.</p>
        <ul>
            <li v-if="taskList.tasksList.length > 0" class="flex justify-between gap-2 mb-2">
                <input
                    type="checkbox"
                    :checked="taskList.allTasksCheckbox"
                    title="Check to complete/uncomplete all tasks"
                    class="cursor-pointer"
                    @change="(event) => taskList.checkAllTasks((<HTMLInputElement>event.target).checked)"
                >
                <button
                    class="text-red-600 hover:text-red-400"
                    aria-label="Delete all tasks"
                    @click="taskList.removeAllTasks"
                >Delete all</button>
            </li>
            <hr v-if="taskList.tasksList.length > 0" class="mb-2">
            <li class="flex mb-2 gap-2" v-for="task in filteredTasks" :key="task.id">
                <input
                    type="checkbox"
                    :id="task.id"
                    :checked="task.completed"
                    title="Check if completed, uncheck if pending"
                    class="cursor-pointer"
                    @change="(event) => taskList.checkTask((<HTMLInputElement>event.target).checked, task)"
                >
                <template v-if="editingTaskId === task.id">
                    <input
                        type="text"
                        v-model="editedTaskDescription"
                        class="border-b font-light grow"
                    >
                    <button @click="saveTask(task.id)" class="text-indigo-600">Save</button>
                </template>
                <template v-else>
                    <label 
                        class="block grow font-light cursor-pointer"
                        :for="task.id"
                    >{{ task.description }}</label>
                    <button @click="editTask(task)" class="text-indigo-600">Edit</button>
                </template>
                <button
                    class="text-red-600 hover:text-red-400"
                    aria-label="Delete task"
                    @click="taskList.removeTask(task.id)"
                >Delete</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';

const taskList = useTaskList();

defineProps<{
    filteredTasks: TheTask[];
}>();

const editingTaskId = ref<string | null>(null);
const editedTaskDescription = ref('');

const editTask = (task: TheTask) => {
    editingTaskId.value = task.id;
    editedTaskDescription.value = task.description;
};

const saveTask = (taskId: string) => {
    const taskIndex = taskList.tasksList.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1 && editedTaskDescription.value.trim() !== '') {
        taskList.tasksList[taskIndex].description = editedTaskDescription.value.trim();
    }
    
    editingTaskId.value = null;
    editedTaskDescription.value = '';
};
</script>
