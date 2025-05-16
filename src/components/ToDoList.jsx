import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ list, onStatus, onDelete, onEdit }) {
  return (
    <>
      <div className="bg-gray-400 max-w-xl mx-auto py-4 px-6 my-6 rounded-xl">
        <p className="text-2xl font-bold text-center">To Do List</p>
        <ul>
          {list.map((item, id) => {
            return (
              <ToDoItem
                key={id}
                id={id}
                items={item}
                onStatus={onStatus}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
