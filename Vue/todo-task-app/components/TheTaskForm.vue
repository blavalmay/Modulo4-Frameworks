<template>
    <form @submit.prevent="onSubmit" class="flex flex-wrap items-end gap-3 w-full">
        <div class="flex flex-col grow">
            <label for="new-task" class="mb-2">Add new task:</label>
            <input type="text" name="new-task" v-model="task" @keyup="onKeyUp" class="border-b text-sm">
        </div>
        <button class="px-3 py-1 text-white bg-indigo-800 rounded">ADD</button>
    </form>
</template>

<script setup lang="ts">
    const task = ref('');

    const onSubmit = async () => {
        console.log(task.value);
        task.value = '';
    };

    const onKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            return onSubmit();
        }
    };
</script>