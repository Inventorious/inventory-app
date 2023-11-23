import React, { useState, useEffect } from "react";
import { ItemsList } from "../components/ItemsList";
import { Page } from "../components/Details";
import logo from "../../images/logo.jpeg";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { LoginPage } from "../components/LoginPage";

export const Homepage = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [activeItem, setActiveItem] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <img src={logo}></img>

      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : !activeItem ? (
        <>
          <h1>Items</h1>
          <h2>All things</h2>
          <ItemsList
            items={items}
            setActiveItem={setActiveItem}
            setItem={setItem}
          />
        </>
      ) : (
        <Page item={item} />
      )}
    </main>
  );
};
