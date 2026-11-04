import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, updateCart, removeItem, totals }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img
                        src={book.url}
                        className="cart__book--img"
                        alt={book.title}
                      />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">${book.price}</span>
                      </div>
                    </div>

                    <div className="cart__quantity">{book.quantity}</div>

                    <div className="cart__total">
                      ${book.price * book.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total">
              <div className="total__item--total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item--total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item--total__price">
                <span>Total</span>
                <span>$10.00</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Haven't gotten around to doing this :(`)}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
