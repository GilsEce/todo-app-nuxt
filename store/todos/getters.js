export default {
    getTasks(state){
        return state.tasks
    },
    getLastTasksId(state){
        if(state.tasks.length===0){
            return 1;
        }else{
            let length =state.tasks.length-1;
            return state.tasks[length].id +1;
        }
    }
}