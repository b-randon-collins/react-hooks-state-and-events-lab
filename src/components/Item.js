import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setIncart] = useState("false");

  return (
    <li className ={
      inCart ? 
      null :
      "in-cart"
    }
    >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {
      inCart ? 
      "add" :
       "remove" 
      }
      
      
      onClick={() => {setIncart(!inCart)}}>
      {
      inCart ? 
      "Add To Cart" :
       "Remove From Cart" 
      }

      </button>
    </li>
  );
}

export default Item;
