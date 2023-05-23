import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, addTodo, deleteTodo } from "../../store/slice/todoSlice";
import "./TodoList.css";
import AddToDo from "../../components/addToDo/AddToDo";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const addTodoHandler = () => {
    if (title.trim() !== "") {
      dispatch(
        addTodo({
          title: title.trim(),
          description: description.trim(),
        })
      );
      setTitle("");
      setDescription("");
      setShowModal(false);
      setError("");
    } else {
      setError("Todo title cannot be empty");
    }
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <React.Fragment>
      <div className="todo-list-container">
        <div className="box">
          <div className="heading">Todo List</div>

          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <div className="todo-row">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodoHandler(todo.id)}
                  />
                  <div className="todo-details">
                    <h3 className={`todo-title ${todo.done ? "done" : ""}`}>
                      {todo.title}
                    </h3>
                    <p
                      className={`todo-description ${todo.done ? "done" : ""}`}
                    >
                      {todo.description}
                    </p>
                  </div>
                  <button
                    className="del-button"
                    onClick={() => deleteTodoHandler(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="add-todo-container">
            {!showModal && (
              <button
                className="add-new-task"
                onClick={() => setShowModal(true)}
              >
                Add New Task
              </button>
            )}
          </div>
          {showModal && (
            <AddToDo
              addTodoHandler={addTodoHandler}
              error={error}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
