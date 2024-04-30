import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Noon Bekhar", rowAssigned: "Farshad" },
    { rowNumber: 2, rowDescription: "Panir Bekhar", rowAssigned: "Farshad" },
    { rowNumber: 3, rowDescription: "Kado Bekhar", rowAssigned: "Farshad" },
    { rowNumber: 4, rowDescription: "Kado Bekhar", rowAssigned: "Farshad" },
    { rowNumber: 5, rowDescription: "Kado Bekhar", rowAssigned: "Farshad" },
  ]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newToDo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newToDo]);
  };

  const deleteToDo = (deleteTodoRowItem) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowItem;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todos</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <TodoTable todos={todos} deleteToDo={deleteToDo} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              {showAddTodoForm && <NewTodoForm addToDo={addToDo} />}
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button
                onClick={() => setShowAddTodoForm(!showAddTodoForm)}
                className="btn btn-primary"
              >
                {showAddTodoForm ? "Close Todo" : "Add Todo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
