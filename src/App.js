import React from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import "./index.css";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import Card from "./components/Card";

//Database
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //--------input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  
  // Radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };



  const filteredData = (Products, selected, query) => {
    let fileteredProducts = Products;

    //filltering input items
    if (query) {
      fileteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      fileteredProducts = fileteredProducts.filter(
        ({ category, color, newPrice, company, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }

    return fileteredProducts.map(({img, title,star,reviews,newPrice, prevPrice}) =>(
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      newPrice={newPrice}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      />
    ))
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav  query={query} handleInputChange={handleInputChange}/>
      <Recomended handleClick={handleClick} />
      <Products result={result}/>
    </>
  );
}

export default App;
