import React, { useState } from "react";

function NewTodoForm(props) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const descriptionChang = (event) => {
    // console.log('Description', event.target.value);
    setDescription(event.target.value);
  };

  const assignedChang = (event) => {
    // console.log('Assigned',event.target.value);
    setAssigned(event.target.value);
  };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addToDo(description, assigned);
      setDescription("");
      setAssigned("");
    }
  };

  return (
    <div>
      <div className="mt-1">
        <form>
          <div className="mb-3">
            <label className="form-label">Assigned</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Assigned To"
              required
              onChange={assignedChang}
              value={assigned}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter ToDo Task Description"
              required
              onChange={descriptionChang}
              value={description}
            ></textarea>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={submitTodo}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTodoForm;
