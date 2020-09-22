<template>
  <div class="tasks">
    <h1 class="tasks__heading">Simple Todo App</h1>
    <div class="tasks__input__div">
      <input
        type="text "
        v-model="newTask"
        class="tasks__input__div__new-task tasks__input__div__new-task--rounded"
      />
      <button
        class="tasks__input__div__btn tasks__input__div__btn--rounded"
        @click="addTask"
      >Add Task</button>
    </div>

    <Items>Eating</Items>
    <Items>Coding</Items>
    <Items>Repeat</Items>
  </div>
</template>


<script>
import { ref, reactive, watch } from "@nuxtjs/composition-api";
import Items from "~/components/TaskComponent/Items";
export default {
  components: {
    Items,
  },
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

    const taskWatch = watch([tasks], (newVal, oldVal) => {
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

  &__heading {
    font-weight: 350;
    text-align: center;
    font-size: 60px;
  }

  &__input__div {
    text-align: center;
    margin-top: 1em;

    &__new-task {
      width: 20em;
      padding: 0.65em 0.65em;
      border: pixelToEm(1) solid #4fd1c5;
      text-transform: capitalize;

      &--rounded {
        @include rounded(pixelToEm(10));
      }

      &:focus {
        outline: none !important;
        border: pixelToEm(2) solid #2c7a7b;
      }
    }

    &__btn {
      font-family: Arial, sans-serif;
      padding: 0.6em 0.6em;
      background-color: white;
      border: pixelToEm(2) solid #4299e1;
      color: #2b6cb0;

      &--rounded {
        @include rounded(pixelToEm(10));
      }

      &:hover,
      &:focus {
        color: white;
        border-color: transparent;
        background-color: #2b6cb0;
        outline: none !important;
      }

      &:active {
        background-color: #0977ee;
      }
    }
  }
}
</style>
