import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./Component/List";
import Alert from "./Component/Alert";

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [buttonType, setButtonType] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemId, setItemId] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    content: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is Submit function");

    if (!name) {
      setAlert({
        show: true,
        content: "Please insert item name",
        type: "danger",
      });
    } else if (name && isEditing) {
      console.log(`This is Function edit and then ${name}`);

      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };

      const newItems = items.map((item) => {
        if (item.id === itemId) {
          return newItem;
        }
        return item;
      });

      setItems(newItems);
      setButtonType(false);
      setIsEditing(false);
      setAlert({
        show: true,
        content: "Edit successful",
        type: "success",
      });
    } else {
      console.log("Adding new Item");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setItems([...items, newItem]);
      setName("");
      setAlert({
        show: true,
        content: "Adding successful",
        type: "success",
      });
    }
  };

  const handleInput = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleClear = () => {
    console.log("This is clear function");
    setItems([]);
    setName("");
  };

  const handleDelete = (id) => {
    console.log("This is delete function");
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    console.log(items);
  };

  const handleEdit = (id) => {
    console.log("This is handleEdit function");
    setButtonType(true);
    setIsEditing(true);
    const ArrayCopy = [...items];
    const index = ArrayCopy.findIndex((item) => item.id === id);
    console.log(index);
    console.log(ArrayCopy[index].title);
    setName(ArrayCopy[index].title);
    setItemId(ArrayCopy[index].id);
    // ArrayCopy[index] = {
    //   id: new Date().getTime().toString(),
    //   title: name,
    // };

    setItems(ArrayCopy);
  };

  return (
    <div className="App">
      <section className="section-center">
        <form className="grocery=from" onSubmit={handleSubmit}>
          <h1>This is Grocery Application</h1>
          {alert.show && <Alert {...alert} removeAlert={setAlert} />}
          <input
            type="text"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type="submit">{buttonType ? "Edit" : "Submit"}</button>
        </form>

        <List
          items={items}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <button onClick={handleClear}>Clear List</button>
      </section>
    </div>
  );
}

export default App;
