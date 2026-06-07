import React from "react";
import './index.css'
const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>

  )
}
function Header() {
  const currentTime = new Date().getHours()
  const openingTime = 8
  const closedTime = 22
  const workingStatus = currentTime >= openingTime && currentTime < closedTime ? 'open' : 'closed'
  return (
    <header className="header">
      <h1>Electronic store</h1>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
      <p className="working-hours">
        {`We are ${workingStatus} now. Working hours ${openingTime}.00 - ${closedTime}.00`}
      </p>
    </header>
  )
}
function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {
          productData.map(product => {
            return <Product productData ={product} key={product.name}/>
          })
        }
      </ul>
    </main>
  )
}
function Product({productData}) {
  return (
    <li className={productData.soldOut ? "product sold-out" : "product"}>
      <img src={productData.photoName}  alt="" />
      <div>
        <h3>{productData.name}</h3>
        <p>{productData.description}</p>
        <span>{ productData.soldOut ? "SOLD OUT" : `$${productData.price}`}</span>
      </div>
    </li>
  )
}
function Footer() {
  return (
    <footer>Footer</footer>
  )
}
export default App
