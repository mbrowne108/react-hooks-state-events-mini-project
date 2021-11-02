import React from "react";
import Task from "./Task";

function TaskList( {tasks, currentTask, handleDelete}) {
  const displayTasks = tasks
    .filter((el) => {
      if (currentTask === "All") return true;
      else return el.category === currentTask
    })
    .map((task, index) => {
      return (
        <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
      )
    })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
