import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const finishEditing = (updatedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTask.id ? updatedTask : todo))
    );
    setEditingTask(null);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (title, category) => {
    const newTodo = {
        
      id: Date.now(),
      title,
      category,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleUpdate = (id, done) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

 

  let searchedTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Further filter by other filters (completed, category, etc.)
  let filteredTodos = searchedTodos;
  if (filter === "completed") {
    filteredTodos = searchedTodos.filter((todo) => todo.done);
  } else if (filter === "uncompleted") {
    filteredTodos = searchedTodos.filter((todo) => !todo.done);
  } else if (filter !== "all") {
    filteredTodos = searchedTodos.filter((todo) => todo.category === filter);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="Container">
        <div className="LeftPanel">
          <div className="AddTodoSection">
            <AddTodo onAdd={handleAdd} />
          </div>
        </div>
        <div className="RightPanel">
          <div className="TodoDisplaySection">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Filter onFilter={setFilter} />
            <TodoList
              todos={filteredTodos}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onEdit={startEditing}
              finishEditing={finishEditing}
              editingTask={editingTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
