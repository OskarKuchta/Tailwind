import React from "react";

const ListWithInputs: React.FC = () => {
  const list = [
    "some values",
    "to create",
    "a unordered",
    "list to test",
    "and repeat knowledge",
  ];
  return (
    <section className="my-10">
      <ol className="ordered-list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <input type="text" />
      <div className="flex justify-between">
        <button className="mt-5 bg-green-500 py-3 px-7 rounded">Add</button>
        <button className="mt-5 bg-red-600 py-3 px-7 rounded">Remove</button>
      </div>
    </section>
  );
};

export default ListWithInputs;
