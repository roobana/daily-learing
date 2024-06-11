import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState } from "react";
import AddInputItems from "./AddInputItems";
import SearchItems from "./SearchItem";

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo-list"))
  );
  const [newItem, setNewItem] = useState(""); //AddInput items
  const [searchItem, setSearchItem] = useState(""); //SearchItem
  const addItem = (item) => {
    // to find the id by using items[items.length-1].id  it will hold last element id
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, list: item };
    // adding new items to the exsiting  item
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log("submitted");
    addItem(newItem); //calling addItem function
    setNewItem("");
  };
  const handleCheck = (id) => {
    const listItems = items.map((val) =>
      val.id === id ? { ...val, checked: !val.checked } : val
    );
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((val1) => val1.id !== id);
    setItems(listItems);
    // to store the state
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };

  return (
    <>
      <Header />
      <AddInputItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmits}
      />
      <SearchItems searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        items={items.filter((item) =>
          item.list.toLowerCase().includes(searchItem.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}
