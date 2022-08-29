import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShowItem from "./ShowItem";
import menu from "./Data";
function App() {
  const category = ["All", "Breakfast", "Lunch", "Shakes"];
  const [type, setType] = useState("All");
  console.log(type);
  const [menuItems, setMenuItem] = useState(menu);

  const handleMenuIteam = (category) => {
    if (category === "All") {
      setMenuItem(menu);
    } else {
      const newItems = menu.filter(
        (menus) => menus.category === category.toLowerCase()
      );
      setMenuItem(newItems);
    }
  };

  const handleItem = (item) => {
    setType(item);
    handleMenuIteam(item);
  };
  console.log(menuItems);

  return (
    <main>
      <div>
        <h2>Our Menu</h2>
      </div>
      <div>
        {category.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItem(item)}
            style={
              item === type
                ? {
                    backgroundColor: "red",
                    color: "#ffff",
                  }
                : {}
            }
          >
            {item}
          </button>
        ))}
      </div>
      <ShowItem items={menuItems} />
    </main>
  );
}

export default App;
