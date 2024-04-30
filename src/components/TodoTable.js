import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
  return (
    <div>
    <table className="table table-hover" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key = {todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteToDo={props.deleteToDo}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TodoTable;
