//This component is made for e2e testing with playwright to test the whole FLOW of form

"use client";

import { useState } from "react";

export default function Form() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="border mx-2 rounded-xl p-2 min-h-96 m-2">
        <h4 className="text-center font-extrabold text-xl">End to End Testing</h4>
      <h1 className="text-2xl font-bold">Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setItems([...items, inputValue]);
          setInputValue("");
        }}
      >
        <label>
          <input
            type="text"
            name="item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
          />
        </label>
        <button className="ml-2" type="submit">
          Add
        </button>
      </form>
      <ul data-testid="items-list">
        {items.map((item, index) => (
          <li key={index} data-testid="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}