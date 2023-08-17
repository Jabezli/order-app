import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import FilterMeals from "./components/FilterMeals";
import CartContext from "./store/cart-context";
import Cart from "./components/Cart";
import Confirm from "./components/UI/Confirm";

const Menu_Data = [
  {
    id: "1",
    title: "Black Tea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 7,
    img: "/img/teas/1.jpg",
  },
  {
    id: "2",
    title: "Long Jing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 10,
    img: "/img/teas/2.jpg",
  },
  {
    id: "3",
    title: "Milk Tea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 7.5,
    img: "/img/teas/3.jpg",
  },
  {
    id: "4",
    title: "Oolong",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 8,
    img: "/img/teas/4.jpg",
  },
  {
    id: "5",
    title: "Puer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 9,
    img: "/img/teas/5.jpg",
  },
  {
    id: "6",
    title: "Rose Tea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 7.5,
    img: "/img/teas/6.jpg",
  },
  {
    id: "7",
    title: "White Tea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ipsa, explicabo distinctio sint ipsam, provident magnam quod",
    price: 9,
    img: "/img/teas/7.jpg",
  },
];

function App() {
  const [menuData, setMenuData] = useState(Menu_Data);

  // for the cart, couple things need to be considered
  // 1. items in the cart -> array
  // 2. total amount of all the items
  // 3. total price
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  //function for filtering teas in the menu
  const filterHandler = (keyword) => {
    //keyword parameter will be sanitized to lower case and remove all the spaces using "replace".
    const sanitizedKeyword = keyword.toLowerCase().replace(/\s/g, "");

    //title of each item will be sanitized to lower case and remove all space to filter with the sanitized keyword
    const newMenuData = Menu_Data.filter((item) =>
      item.title.toLowerCase().replace(/\s/g, "").includes(sanitizedKeyword)
    );

    setMenuData(newMenuData);
  };

  //add Tea to cart
  const addItem = (tea) => {
    // tea is what we are adding into cart
    const newCart = { ...cartData };

    if (newCart.items.indexOf(tea) === -1) {
      newCart.items.push(tea);
      tea.amount = 1;
    } else {
      tea.amount += 1;
    }

    newCart.totalAmount += 1;
    newCart.totalPrice += tea.price;

    setCartData(newCart);
  };

  //sub Tea from cart
  const removeItem = (tea) => {
    const newCart = { ...cartData };

    tea.amount -= 1;

    if (tea.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(tea), 1);
    }

    newCart.totalAmount -= 1;
    newCart.totalPrice -= tea.price;

    setCartData(newCart);
  };

  //to be consistent, clearCart function will be declared in app.js instead of cartDetail's index.js
  const clearCart = () => {
    //try to make it not that DRY later.
    const newCart = { ...cartData };
    newCart.items.forEach((item) => {
      delete item.amount;
    });
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;
    setCartData(newCart);

    // const newItems = cartData.items.forEach((item) => {
    //   delete item.amount;
    // });

    // const newItems = cartData.items.map((item) => ({
    //   ...item,
    //   amount: 0,
    // }));
    // setCartData({
    //   ...cartData,
    //   items: newItems,
    //   totalAmount: 0,
    //   totalPrice: 0,
    // });
  };
  console.log("updated amount is:", cartData);
  return (
    <CartContext.Provider
      value={{ ...cartData, addItem, removeItem, clearCart }}
    >
      <div>
        <FilterMeals onFilter={filterHandler} />
        <Menu menuData={menuData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
