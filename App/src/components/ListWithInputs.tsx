import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ListWithInputs: React.FC = () => {
  const ul: string[] = [
    "Some values",
    "To create",
    "A unordered",
    "List to test",
    "And repeat knowledge",
  ];

  const [value, setValue] = useState<string>("");
  const storedList: string | undefined = Cookies.get("ulList");
  const initialList: any = storedList ? JSON.parse(storedList) : [];

  const [list, setList] = useState<string[]>(initialList);

  useEffect(() => {
    Cookies.set("ulList", JSON.stringify(list));
  }, [list]);

  const grabItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const addItem: () => void = () => {
    if (value.trim() === "") {
      return;
    }
    setList((prev) => [
      ...prev,
      value.slice(0, 1).toUpperCase() + value.slice(1),
    ]);
    setValue("");
  };
  const removeItem: () => void = () => {
    const updatedList = [...list];
    updatedList.pop();
    setList(updatedList);
  };
  const reset: () => void = () => {
    setList(ul);
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
        className="pl-2 placeholder-[#445dd8] placeholder-opacity-70 text-[#445dd8] outline-[#445dd8]"
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
      <button
        className="mt-8 py-3 px-3 lg:px-7 rounded bg-blue-950 focus:scale-110 outline-blue-950"
        onClick={reset}
      >
        Reset list
      </button>
    </section>
  );
};

export default ListWithInputs;
