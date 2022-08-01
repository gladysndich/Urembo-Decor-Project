import React from "react";
import Items from "./Item";

function ItemCollection({ collection }) {
    
    const renderCollection = () => {
        return collection.map(item => {
            return (<Items key={item.id} item={item} />);
        });
    }


    return (
        <div className="collection">
            <h2>Your Collection:</h2>
            <ul>
                {renderCollection()}
            </ul>
        </div>
    );
}

export default ItemCollection;