/* eslint-disable  */
import React from "react";

const TodoInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoInput;
