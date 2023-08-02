import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

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
  return (
    <div>
      <Menu menuData={menuData} />
    </div>
  );
}

export default App;
