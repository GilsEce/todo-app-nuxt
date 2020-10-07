export default {
  CREATE_TASKS(state, payload) {
    state.tasks.push(payload);
  },
  DELETE_TASK(state, payload) {
    state.tasks = state.tasks.filter(tasks => {
      return tasks.id != payload;
    });
  }
};
