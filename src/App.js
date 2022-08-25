import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";
import Product from "./Components/Product";

const productData = [
  { id: 1, name: "T-shirt", rating: 4, price: "$20" },
  { id: 2, name: "Jacket", rating: 5, price: "$50" },
  { id: 3, name: "Cap", rating: 3, price: "$5" },
  { id: 4, name: "Shoe", rating: 4, price: "$30" },
  { id: 5, name: "Pant", rating: 3, price: "$20" },
  { id: 6, name: "Watch", rating: 4, price: "$100" },
  { id: 7, name: "Belt", rating: 3, price: "$30" },
  { id: 8, name: "Glasses", rating: 4, price: "$50" },
];

function App() {
  const [cart,setCart] = useState([])
  const [count,setCount] = useState(0)
  const add=(id)=>{
    setCart([...cart,id]);
    setCount(count+1)
  }
  const remove=(id)=>{
    setCount(count-1)
    setCart(current => 
      current.filter(item => item !== id)
      );
  }
  
  return (
    <div>
      <Navbar count={count}/>
      <Header />
      <ProductSection>
        {productData.map((data) => {
          return (
            <Product
              key={data.id}
              productName={data.name}
              rating={data.rating}
              price={data.price}
              onAdd={()=>{add(data.id)}}
              onRemove={()=>{remove(data.id)}}
              inCart={cart.includes(data.id)}
            />
          );
        })}
      </ProductSection>
      <Footer />
    </div>
  );
}

export default App;