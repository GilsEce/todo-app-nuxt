export default {
  CREATE_TASKS(state, payload) {
    state.tasks.push(payload);
  }
};
