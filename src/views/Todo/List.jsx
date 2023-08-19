import React, { useState } from "react";
import Todos from "./Todos";
export default function List() {
  const [data, setData] = useState([
    { id: 1, content: "This is a book", type: "nice" },
    { id: 2, content: "This is a fish", type: "nice" },
    { id: 3, content: "This is bad content", type: "bad" },
  ]);

  const addItem = (addTodo) => {
    setData([...data, addTodo]);
  };
  const handleDeleteButton = (todo) => {
    let deleteTodo = [...data];
    deleteTodo = deleteTodo.filter((i) => i.id !== todo.id);
    setData(deleteTodo);
  };
  return (
    <>
      <Todos addItem={addItem} />
      <div className="list">
        {data.length === 0 ? (
          <span>there nothing left</span>
        ) : (
          data.map((item, index) => {
            return (
              <>
                <div key={item.id}>
                  {index + 1} - {item.content}
                  <button onClick={() => handleDeleteButton(item)}>X</button>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
}
