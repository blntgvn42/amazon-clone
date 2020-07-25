import React from 'react'

import "./styles/CheckoutProduct.css"
import StarIcon from "@material-ui/icons/StarRate"
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }


    return (
        <div className="checkoutProduct" key={id}>
            <img src={image} alt={`Product ${title} Picture`} className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₺</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, index) => <StarIcon key={index} />)}
                </div>
                <button className="checkoutProduct__removeBasket" onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
