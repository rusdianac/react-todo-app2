import React, { useContext } from "react";
import { TodoContext } from "../App";

// Hapus toggleCompleted dan deleteTodo dari props
const TodoItem = ({ todo }) => {
  // Peroleh "toggleCompleted" dan "deleteTodo" dari TodoContext
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      {/* Menambahkan checkbox */}
      <input
        type="checkbox"
        style={styles.checkbox}
        // Jalankan function toggleCompleted ketika checkbox di-klik
        onChange={() => toggleCompleted(todo.id)} // Memberikan id dari todo sebagai argument
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      {/* Tambahkan sebuah button di sini */}
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
