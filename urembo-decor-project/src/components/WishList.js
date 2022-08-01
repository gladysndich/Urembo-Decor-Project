import React from "react";
import Items from "./Item";

function WishList({ wishlist }) {

    const renderWishlist = () => {
        return wishlist.map(item => {
            return <Items key={item.id} item={item} />
        })
    }

    return (
        <div className="WishList">
            <h2>Your Wishlist:</h2>
            <ul>
                {renderWishlist()}
            </ul>
        </div>
    );
}

export default WishList;