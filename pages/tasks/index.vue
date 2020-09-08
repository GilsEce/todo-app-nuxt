<template>
  <div class="tasks">
    <h1 class="tasks__heading">Task Pages</h1>
    <div class="tasks__input__div">
      <input type="text " v-model="newTask" class="tasks__input__div__new-task" />
      <button class="tasks__input__div__btn" @click="addTask">Add Task</button>
    </div>
  </div>
</template>


<script>
import { h, ref, reactive, watch } from "@nuxtjs/composition-api";
export default {
  setup() {
    //data
    const newTask = ref("");
    const tasks = ref([]);

    //method
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



<style  lang="scss" scoped>
.tasks {
  margin-top: 10px;
  height: 100vh;

  &__input__div {
    text-align: center;
    margin-top: 1em;

    &__new-task {
      padding: 0.6em 0.6em;
      border: pixelToEm(1) solid #4fd1c5;

      &:focus {
        outline: none !important;
        border: pixelToEm(2) solid #2c7a7b;
      }
    }

    &__btn {
      color: red;
      padding: 0.6em 0.6em;
      background-color: white;
      border: pixelToEm(2) solid #4299e1;
      color: #2b6cb0;

      &:hover,
      &:focus {
        @apply text-white;
        @apply border-transparent;
        @apply bg-blue-700;
      }
    }
  }

  h1 {
    font-weight: 350;
    text-align: center;
    font-size: 60px;
  }
}
</style>
