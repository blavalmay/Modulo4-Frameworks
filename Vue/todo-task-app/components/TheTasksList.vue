<template>
    <div class="flex justify-between flex-wrap gap-2 items-end mt-6">
        <h2>TASK LIST</h2>
        <input 
            type="text"
            class="border rounded px-2 py-1 font-light max-w-full"
            placeholder="Search..."
            v-model="taskFilter"
        >
    </div>
    <div class="p-3 pb-1 mt-3 rounded border">
        <p 
        v-if="taskList.tasksList.length === 0" class="font-light mb-2">The task list is empty.</p>
        <ul>
            <li v-if="taskList.tasksList.length > 0" class="flex justify-between gap-2 mb-2">
                <input
                    type="checkbox"
                    :checked="taskList.allTasksCheckbox"
                    title="Check to complete all tasks"
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
                    :checked="task.completed"
                    title="Check if completed, uncheck if pending"
                    class="cursor-pointer"
                    @change="(event) => taskList.checkTask((<HTMLInputElement>event.target).checked, task)"
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

    const taskFilter = ref('');

    const filteredTasks = computed(() => {
        if(!taskList) {
            return [];
        }

        return taskList.tasksList.filter((task: TheTask) => {
            return task.description.toLowerCase().includes(taskFilter.value.toLowerCase())
        });
    });
</script>