import React, { useState } from "react";


function NewTaskForm( {categories, onTaskFormSubmit}) {
  const [newText, setNewText] = useState('')
  const [newTextCategory, setNewTextCategory] = useState('Food')
  
  function handleChangeName(event) {
    setNewText(event.target.value)
  }
  
  function handleChangeCategory(event) {
    setNewTextCategory(event.target.value)
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={(event) => {
        console.log('click!')
        event.preventDefault();
        onTaskFormSubmit({text: newText, category: newTextCategory})
      }}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChangeName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          {categories
            .filter((el) => el !== "All")
            .map((el, index) => (
              <option key={index}>{el}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
