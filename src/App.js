import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import FilterMeals from "./components/FilterMeals";
import CartContext from "./store/cart-context";

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
  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
      <div>
        <FilterMeals />
        <Menu menuData={menuData} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
