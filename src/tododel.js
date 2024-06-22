import { useState } from "react";

export default function App() {
  const [addInput, setAddInput] = useState("");
  const [list, setList] = useState([]);

  console.log(addInput);
  const handleClick = () => {
    setList([...list, addInput]);
    setAddInput("");
  };

  const handleDelete = (indexto) => {
    const del = list.filter((val, index) => {
      return index !== indexto;
    });
    console.log("aftterfilter", del);
    setList(del);
  };
  console.log("list:", list);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add items"
        value={addInput}
        onChange={(e) => setAddInput(e.target.value)}
      />
      <button onClick={handleClick}> submit </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
