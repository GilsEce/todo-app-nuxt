<template>
  <div class="tasks">
    <h1 class="tasks__heading">Task Pages</h1>
    <div class="tasks__input__div">
      <input type="text " v-model="newTask" class="tasks__input__div__new-task" id="task-input" />
      <button
        class="tasks__input__div__btn"
        @click="addTask"
      >Add Task</button>
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
    @apply text-center;
    @apply mt-2;

    &__new-task {
      @apply border;
      @apply border-teal-400;
      @apply py-2;
      @apply px-2;
    }

    &__btn{
      @apply bg-blue-500;
      @apply rounded;
      @apply px-2;
      @apply  py-2; 
      @apply border;
      @apply border-blue-500;
      @apply text-white;
     

      &:hover{
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
