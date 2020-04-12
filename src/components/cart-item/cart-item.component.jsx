import React from "react";
import "./cart-item.styles.scss";
import {CartItemContainer, ItemDetails, Name, Price} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={ imageUrl } alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price}
      </Price>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
