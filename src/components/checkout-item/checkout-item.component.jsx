import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import {CheckoutItemContainer, ImageContainer, SpanItems, SpanQuantity, Arrow, SpanValue, ButtonRemove} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <SpanItems>{name}</SpanItems>
      <SpanQuantity>
        <Arrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </Arrow>
        <SpanValue>{quantity}</SpanValue>
        <Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </Arrow>
      </SpanQuantity>
      <SpanItems>{price}</SpanItems>
      <ButtonRemove onClick={() => clearItem(cartItem)}>
        &#10005;
      </ButtonRemove>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
