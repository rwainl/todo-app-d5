import React from "react";
import { useState } from "react";

function ToDoItem({ items, id, onStatus, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(items.item);

  const saveHandler = (event) => {
    event.preventDefault();
    onEdit(items.id, newText);
    setIsEditing(false);
  };
  return (
    <>
      <li
        key={id}
        style={{ textDecoration: items.completed ? "line-through" : "none" }}
        className="list-none py-2"
      >
        <input
          type="checkbox"
          checked={items.completed}
          onChange={() => onStatus(items.id)}
          className=""
        />
        <span className="mx-2 text-lg font-semibold">{items.item}</span>
        {isEditing ? (
          <>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="bg-white rounded-lg px-2 py-1 mr-2 border"
            />
            <button
              onClick={saveHandler}
              className="bg-white rounded-lg border px-2 py-1 transition-all hover:bg-black hover:text-white duration-300 ease-in-out"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-white rounded-lg border px-2 py-1 transition-all hover:bg-black hover:text-white duration-300 ease-in-out"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(items.id)}
          className="bg-white rounded-lg border px-2 ml-2 py-1 transition-all hover:bg-black hover:text-white duration-300 ease-in-out"
        >
          Hapus
        </button>
      </li>
      {newText.trim() === "" ? (
        <>
        error
          <p className="text-sm text-red-600 ml-5">teks tidak boleh kosong</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ToDoItem;
