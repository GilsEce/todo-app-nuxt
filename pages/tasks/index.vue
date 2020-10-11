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

    <Items v-for="task in tasks" :key="task.id">
      <div
        slot="title"
        type="none"
        class="item-1__task-list item-1__task-list--rounded"
        @click="updateStatus(task.id)"
      >
        <p :class="{ isDone: task.isDone }">{{ task.name }}</p>
      </div>
      <button
        slot="deleteButton"
        class="item-2__delete-btn item-2__delete-btn--rounded"
        @click="deleteTask(task.id)"
      >
        Delete
      </button>
    </Items>
  </div>
</template>

<script>
import { ref, watch } from "@nuxtjs/composition-api";
import useVuexHelper from "@/compositions/custom-vuex-helper";

import Items from "~/components/TaskComponent/Items";
export default {
  layout: "main",
  components: {
    Items,
  },
  setup(props, { root }) {
    //data
    const [useGetters, useActions] = useVuexHelper(root.$store); // from custom vuex helper
    const newTask = ref("");
    const { tasks, taskId } = useGetters({
      tasks: "todos/getTasks",
      taskId: "todos/getLastTasksId",
    });

    const taskWatch = watch([tasks], (newVal, oldVal) => {}); //this function will trigger when task data is change.

    //method

    const {
      todosDeleteTask,
      todosCreateTask,
      todosUpdateTaskStatus,
    } = useActions({
      todosDeleteTask: "todos/deleteTask",
      todosCreateTask: "todos/createTasks",
      todosUpdateTaskStatus: "todos/updateTaskStatus",
    });

    function toCapitalLetter(str) {
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
        name: toCapitalLetter(newTask.value.trim()),
        isDone: false,
      };
      newTask.value = "";
      todosCreateTask(payload);
    };

    const updateStatus = (taskId) => {
      todosUpdateTaskStatus(taskId);
    };

    const deleteTask = (taskId) => {
      todosDeleteTask(taskId);
    };

    return {
      newTask,
      addTask,
      tasks,
      updateStatus,
      deleteTask,
    };
  },
};
</script>

<style lang="scss" scoped>
.isDone {
  text-decoration: line-through;
  text-decoration-color: gray;
}

.tasks {
  min-height: 100vh;
  padding-bottom: 3rem;

  &__heading {
    font-weight: 350;
    text-align: center;
    font-size: 60px;
    padding-top: 1rem;
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
