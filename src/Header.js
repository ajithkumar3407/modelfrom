import React from "react";
import './Header.css';

import { useSelector } from "react-redux";

const Header=()=>{

const {taskList}= useSelector((state)=>state.tasks)

console.log(taskList)

    return(
        <div>
            <h1 className="text-danger  text-center my-6">Task Management</h1>
            <p className="text-center">{`currently ${taskList.length} Task pending`}</p>
        </div>
    )
}
export default Header ;
