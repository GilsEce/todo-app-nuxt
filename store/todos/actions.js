export default {
  createTasks({ commit }, payload) {
    commit("CREATE_TASKS", payload);
  },
  deleteTask({commit},payload){
    commit("DELETE_TASK",payload);
  }
};
