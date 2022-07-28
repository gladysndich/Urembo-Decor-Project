import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemDetails({ addToCollection, addToWishlist, removeFromWishList }) {
  const [item, setItems] = useState({})
  const { id } = useParams();
  const { image, name, price } = item

  useEffect(() => {
    fetch(`http://localhost:3000/item/${id}`)
    .then(r => r.json())
    .then(item => setItems(item))
  },[id])

  const handleBuyNow = () => {
    if(fetch(`http://localhost:3000/wishlist/${id}`)){
      fetch(`http://localhost:3000/wishlist/${id}`, {
        method: "DELETE"
      })
      .then(removeFromWishList(item))
    }
    fetch('http://localhost:3000/collection',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(item)
        })
        .then(r => r.json())
        .then(newItem => addToCollection(newItem))
  }

  const handleWishlist = () => {
    fetch('http://localhost:3000/wishlist',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(r => r.json())
    .then(newItem => addToWishlist(newItem))
  }
  
  
  return (
    <div className="ItemDetails">
      <h1>Item Details:</h1>
      <h3>Name: {name}</h3>
      <img id="details-img" src={image} alt={name}></img>
      <p>Price: {price}</p>
      <br></br>
      <Link to="/collection">
        <button onClick={handleBuyNow}>Buy Now</button>
      </Link>
      <Link to='/wishlist' >
        <button onClick={handleWishlist} >Add to Wishlist</button>
      </Link>
    </div>
  );
}

export default ItemDetails;