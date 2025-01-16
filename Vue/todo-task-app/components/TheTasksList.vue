<template>
    <div class="flex justify-between flex-wrap gap-2 items-end mt-6">
        <h2 class="grow">TASK LIST</h2>
        <button
            title="Show only completed tasks"
            :class="{ 'bg-indigo-600': showCompleted, 'bg-indigo-400': !showCompleted }"
            @click="toggleShowCompleted"
            class="px-3 h-8 text-white rounded"
        >Completed</button>
        <button
            title="Show only pending tasks"
            :class="{ 'bg-indigo-600': showPending, 'bg-indigo-400': !showPending }"
            @click="toggleShowPending"
            class="px-3 h-8 text-white rounded"
        >Pending</button>
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
                <label class="block grow font-light cursor-pointer" :for="task.id">{{ task.description }}</label>
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
    const showCompleted = ref(false);
    const showPending = ref(false);

    const filteredTasks = computed(() => { // la propiedad computed sirve para que la función solo se ejecute cuando cambian sus dependencias (taskList.tasksList y taskFilter.value)
        if(!taskList) {
            return [];
        }

        return taskList.tasksList.filter((task: TheTask) => {
            const filteredTasks = task.description.toLowerCase().includes(taskFilter.value.toLowerCase());

            if (showCompleted.value) {
                return filteredTasks && task.completed;
            }
            if (showPending.value) {
                return filteredTasks && !task.completed;
            }
            return filteredTasks;
        });
    });

    const toggleShowCompleted = () => {
        if (showCompleted.value) {
            showCompleted.value = false;
        } else {
            showCompleted.value = true;
            showPending.value = false;
        }
    };
    const toggleShowPending = () => {
        if (showPending.value) {
            showPending.value = false;
        } else {
            showPending.value = true;
            showCompleted.value = false;
        }
    };
</script>