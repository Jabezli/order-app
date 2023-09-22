import React, { useState, useReducer } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.js";
import FilterMeals from "./components/FilterMeals/FilterMeals.js";
import CartContext from "./store/cart-context";
import Cart from "./components/Cart/Cart.js";
import Confirm from "./components/UI/Confirm/Confirm";

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

const cartReducer = (state, action) => {
  const newCart = { ...state };
  switch (action.type) {
    default:
      return state;
    case "ADD_ITEM":
      if (newCart.items.indexOf(action.tea) === -1) {
        newCart.items.push(action.tea);
        action.tea.amount = 1;
      } else {
        action.tea.amount += 1;
      }

      newCart.totalAmount += 1;
      newCart.totalPrice += action.tea.price;
      return newCart;

    case "REMOVE_ITEM":
      action.tea.amount -= 1;

      if (action.tea.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.tea), 1);
      }

      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.tea.price;
      return newCart;

    case "CLEAR_CART":
      newCart.items.forEach((item) => {
        delete item.amount;
      });
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
  }
};

function App() {
  const [menuData, setMenuData] = useState(Menu_Data);

  // for the cart, couple things need to be considered
  // 1. items in the cart -> array
  // 2. total amount of all the items
  // 3. total price

  const [cartData, cartDispatch] = useReducer(cartReducer, {
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

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <div>
        <FilterMeals onFilter={filterHandler} />
        <Menu menuData={menuData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
