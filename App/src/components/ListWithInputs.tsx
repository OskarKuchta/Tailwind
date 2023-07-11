import React, { useState } from "react";

const ListWithInputs: React.FC = () => {
  const [value, setValue] = useState("");
  const ul: string[] = [
    "some values",
    "to create",
    "a unordered",
    "list to test",
    "and repeat knowledge",
  ];
  const [list, setList] = useState<string[]>(ul);
  const grabItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const addItem: () => void = () => {
    if (value.trim() === "") {
      return;
    }
    setList((prev) => [...prev, value]);
    setValue("");
  };
  const removeItem: () => void = () => {
    const updatedList = [...list];
    updatedList.pop();
    setList(updatedList);
  };
  return (
    <section className="my-10 flex flex-col w-full">
      <ul className="ordered-list">
        {list.map((item, index) => (
          <li key={index} className="text-[#445dd8]">
            {item}
          </li>
        ))}
      </ul>
      <input
        id="list-item"
        value={value}
        type="text"
        className="placeholder-[#445dd8] text-[#445dd8]"
        placeholder="Type someone"
        onChange={grabItem}
      />
      <div className="flex justify-between">
        <button
          className="mt-5 bg-add py-3 px-3 lg:px-7 rounded focus:outline-add focus:scale-110"
          onClick={addItem}
        >
          Add
        </button>
        <button
          className="mt-5 bg-remove py-3 px-3 lg:px-7 rounded focus:outline-remove focus:scale-110"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </section>
  );
};

export default ListWithInputs;
