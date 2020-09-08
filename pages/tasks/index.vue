<template>
  <div class="user-page">
    <h1>Task Pages</h1>
    <div class="text-center mt-2">
      <input
        type="text "
        v-model="newTask"
        class="border border-teal-400 py-2 px-2"
        id="task-input"
      />
      <button
        class="bg-blue-500 rounded px-2 py-2 border border-blue-500 hover:bg-blue-700 text-white hover:text-white hover:border-transparent"
        @click="addTask"
      >Add Task</button>
    </div>
  </div>
</template>


<script>
import { h, ref, reactive, watch } from "@nuxtjs/composition-api";
export default {
  setup() {
    const newTask = ref("");
    const tasks = ref([]);

    const addTask = () => {
      if (newTask.value.length > 0) {
        tasks.value.push(newTask.value);
        newTask.value = "";
      } else {
        return false;
      }
    };

    const taskWatch = watch(tasks, (newVal, oldVal) => {
      console.log("Task changed", newVal, oldVal);
    });

    return {
      newTask,
      tasks,
      addTask,
    };
  },
};
</script>





<style scoped>
.user-page {
  margin-top: 10px;
}

.user-page h1 {
  font-weight: 350;
  text-align: center;
  font-size: 60px;
}
</style>
