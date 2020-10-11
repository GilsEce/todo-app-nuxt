export default {
  CREATE_TASKS(state, payload) {
    state.tasks.push(payload);
  },
  DELETE_TASK(state, payload) {
    state.tasks = state.tasks.filter(tasks => {
      return tasks.id != payload;
    });
  },
  UPDATE_TASK_STATUS(state, payload) {
    let index = state.tasks.findIndex(task => task.id === payload);

    state.tasks[index].isDone
      ? (state.tasks[index].isDone = false)
      : (state.tasks[index].isDone = true);
  }
};
