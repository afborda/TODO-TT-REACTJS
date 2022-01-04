import React from "react";
import Delete from "../../assets/delete.png";

function Tasks({ task, done, id, onClick, onDone }) {
  return (
    <div className="task" onClick={onDone}>
      <div className={`status ${done ? "done" : "pending"}`}></div>
      <div className="text">{task}</div>
      <img src={Delete} alt="Excluir" className="delete" onClick={onClick} />
    </div>
  );
}

export default Tasks;
