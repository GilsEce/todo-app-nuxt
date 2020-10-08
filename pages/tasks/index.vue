<template>
  <div class="tasks">
    <h1 class="tasks__heading">Simple Todo App</h1>
    <div class="tasks__input__div">
      <input
        type="text "
        v-model="newTask"
        maxlength="20"
        class="tasks__input__div__new-task tasks__input__div__new-task--rounded"
      />
      <button
        class="tasks__input__div__btn tasks__input__div__btn--rounded"
        @click="addTask"
      >
        Add Task
      </button>
    </div>

    <Items v-for="task in tasks" :id='id' :key="task.id">{{ task.name }}</Items>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from "@nuxtjs/composition-api";
import Items from "~/components/TaskComponent/Items";
export default {
  layout: "main",
  components: {
    Items,
  },
  setup(props, { root }) {
    //data
    const newTask = ref("");

    const tasks = computed(() => root.$store.getters["todos/getTasks"]);
    const taskId = computed(() => root.$store.getters["todos/getLastTasksId"]);
    const taskWatch = watch([tasks], (newVal, oldVal) => {});

    //method

    function capital_letter(str) {
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
    }

    const addTask = () => {
      if (newTask.value.trim().length <= 0) {
        newTask.value = "";
        return false;
      }
      let payload = {
        id: taskId.value,
        name: capital_letter(newTask.value.trim()),
        isDone: false,
      };
      newTask.value = "";
      root.$store.dispatch("todos/createTasks", payload);
    };

    return {
      newTask,
      addTask,
      tasks,
    };
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  min-height: 100vh;

  &__heading {
    font-weight: 350;
    text-align: center;
    font-size: 60px;
    padding-top:1rem;
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
