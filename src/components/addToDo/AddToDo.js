import React from "react";
import "./AddToDo.css";

const AddToDo = ({
  addTodoHandler,
  error,
  title,
  setTitle,
  description,
  setDescription,
  setShowModal,
}) => {
  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-content">
          <div className="headingModal">Add Todo</div>
          <div className="input-flex">
            {error && <span className="error">{error}</span>}

            <input
              className="input-field"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-flex">
            <input
              className="input-field"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="add-todo-container">
            <button className="add-new-task" onClick={addTodoHandler}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddToDo;
