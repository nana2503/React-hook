import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const handleOnChange = (event) => {
    setName(event.target.value);
  };
  const handleOnClick = () => {
    if (!name) {
      alert("type something...");
      return;
    }
    setContent(name);
    setName("");
  };
  return (
    <div>
      <span>Type something: </span>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
      <div>
        <button
          onClick={() => {
            handleOnClick();
          }}
        >
          Click me to show what u just type
        </button>
      </div>
      {!content ? <div>Nothing Here</div> : <div>Hello {content}</div>}

      {/* <div>Hello {content}</div> */}
    </div>
  );
}
