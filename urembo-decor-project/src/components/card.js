import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name }) => {
    const { name, price, image}  = item

    return (
        <Link to={`/shop/${id}/`}>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt="cover"/>
                </div>
                <div className="card-name">{name}</div>
                <div className="card-details">${price}</div>
            </div>
        </Link>
    )
}

export default Card;