<template>
    <h2 class="mt-6">Task List:</h2>
    <div class="p-3 pb-1 mt-3 rounded border">
        <p 
        v-if="taskList.tasksList.length === 0" class="font-light mb-2">The task list is empty.</p>
        <ul>
            <li v-if="taskList.tasksList.length > 0" class="flex justify-between mb-2">
                <input
                    type="checkbox"
                    title="Check to complete all tasks"
                    class="mr-2 cursor-pointer"
                >
                <button
                    class="text-red-600 hover:text-red-400"
                    aria-label="Delete all tasks"
                    @click="taskList.removeAllTasks"
                >Delete all</button>
            </li>
            <hr v-if="taskList.tasksList.length > 0" class="mb-2">
            <li class="flex mb-2" v-for="task in taskList.tasksList" :key="task.id">
                <input
                    type="checkbox"
                    :checked="task.completed"
                    title="Check if completed, uncheck if pending"
                    class="mr-2 cursor-pointer"
                >
                <span class="block grow font-light">{{ task.description }}</span>
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
    const taskList = useTaskList();
</script>