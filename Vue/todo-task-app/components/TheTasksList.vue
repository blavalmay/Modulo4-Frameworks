<template>
    <div class="flex justify-between flex-wrap gap-2 items-end mt-6">
        <h2 class="grow">TASK LIST</h2>
        <template v-if="taskList.tasksList.length > 0">
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
        </template>
    </div>
    <TheTasksListItems :filteredTasks="filteredTasks"/>
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