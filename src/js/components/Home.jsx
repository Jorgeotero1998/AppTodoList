import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = (e) => {
    if (e.key === "Enter" && tarea.trim() !== "") {
      setLista([...lista, tarea.trim()]);
      setTarea("");
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="main-title">Tareas</h1>
      <div className="todo-container">
        <div className="input-group">
          <input
            type="text"
            placeholder="¿Qué falta por hacer?"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            onKeyDown={agregarTarea}
          />
        </div>
        <ul className="task-list">
          {lista.length === 0 ? (
            <li className="no-tasks">No hay tareas, añadir tareas</li>
          ) : (
            lista.map((item, index) => (
              <li key={index} className="task-item">
                <span className="task-text">{item}</span>
                <button
                  className="delete-btn"
                  onClick={() => setLista(lista.filter((_, i) => i !== index))}
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="list-footer">
          {lista.length} {lista.length === 1 ? "item" : "items"} left
        </div>
      </div>
    </div>
  );
};

export default Home;
