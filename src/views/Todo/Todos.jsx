import React, { useState } from "react";

export default function Todos(props) {
  const [content, setContent] = useState("");
  const handleOnChange = (event) => {
    setContent(event.target.value);
  };
  const handleOnClick = () => {
    if (!content) {
      alert("Please type somthing");
      return;
    }
    props.addItem({
      id: Math.floor(Math.random() * 100),
      content: content,
      type: Math.random() < 0.5 ? "nice" : "bad",
    });
    setContent("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            handleOnChange(event);
          }}
        />
        <button
          type="button"
          onClick={() => {
            handleOnClick();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
