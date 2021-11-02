import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [useSelected, setSelected] = useState('All')
  const [useTasks, setTasks] = useState([...TASKS])

  function handleDelete(el) {
    const updatedTasks = useTasks.filter((task) => task.text !== el)
    setTasks(updatedTasks)
  }

  function onTaskFormSubmit(event) {
    setTasks([...useTasks, event])
  }

  function handleFilter(event) {
    setSelected(event)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={useTasks} currentTask={useSelected} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
