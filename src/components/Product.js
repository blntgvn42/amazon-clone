import React from 'react'

import "./styles/Product.css"
import StarIcon from "@material-ui/icons/StarRate"
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { id, title, price, rating, image }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>₺</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, index) => <StarIcon key={index} />)}
                </div>
            </div>

            <img
                src={image}
                alt=""
                className="product__image" />
            <button className="product__addBasket" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
