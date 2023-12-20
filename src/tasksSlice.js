import { createSlice } from '@reduxjs/toolkit'

const initialState={
    taskList:[],
    selectedTask:{}
}



 const tasksSlice = createSlice(
      {

        name: 'ACHUX    ',
        initialState,
        reducers:{
            addTaskToList:(state, action)=>{
                    const id=Math.random*100
                    let task={...action.payload,id}
                    state.taskList.push(task)
            },
            removeTaskFromList:(state,action)=>{
                    state.taskList=state.taskList.filter((task)=>task.title !== action.payload.title)
            },
            updateTaskInList:(state,action)=>{
                        state.taskList=state.taskList.map((task)=>
                        task.title === action.payload.title ? action.payload:task
                        
                    )
            },
            selectedTask:(state,action)=>{
                state.selectedTask=action.payload
            }
        }


    })

    export const {addTaskToList,removeTaskFromList,updateTaskInList,selectedTask}=tasksSlice.actions

    export default  tasksSlice.reducer ;