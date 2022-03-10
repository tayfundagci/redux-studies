import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
} from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    dispatch(destroy(id));
  };

  return (
    <ul className="todo-list">
      {filteredItems.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
