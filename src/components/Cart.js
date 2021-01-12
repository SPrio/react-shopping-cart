import React, { Component } from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is Empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((cartItem) => (
              <li key={cartItem._id}>
                <div>
                  <img src={cartItem.image} alt={cartItem.title}></img>
                </div>
                <div>{cartItem.title}</div>
                <div className="right">
                  {formatCurrency(cartItem.price)} X {cartItem.count}{" "}
                  <button
                    className="button"
                    onClick={() => this.props.removeFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
