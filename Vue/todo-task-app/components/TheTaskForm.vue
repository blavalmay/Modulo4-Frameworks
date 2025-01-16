<template>
    <form @submit.prevent="onSubmit" class="flex flex-wrap items-end gap-3 w-full">
        <div class="flex flex-col grow">
            <label for="new-task" class="mb-2">Add new task:</label>
            <input 
                type="text"
                name="new-task"
                v-model="task"
                @keyup="onKeyUp"
                class="border-b text-sm font-light h-8 px-2"
            >
        </div>
        <button
            class="px-3 h-8 text-white rounded bg-indigo-800 hover:bg-indigo-600"
            aria-label="Add new task"
        >ADD</button>
    </form>
</template>

<script setup lang="ts">
    const task = ref('');
    const taskList = useTaskList();

    const onSubmit = async () => {
        taskList.addNewTask(task.value);
        task.value = '';
    };

    const onKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            return onSubmit();
        }
    };
</script>