import React from "react";
import { withRouter } from 'react-router-dom';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartItems, EmptyCart, Button } from "./cart-dropdown.styles";

const CartDopdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartItems>
    <Button onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}} >GO TO CHECKOUT</Button>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDopdown));
