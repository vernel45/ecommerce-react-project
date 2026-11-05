import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart }) => {
  const subtotal = cart.reduce((total, book) => {
    const price = book.salePrice ?? book.originalPrice;
    return total + price * book.quantity;
  }, 0);

  const tax = subtotal * 0.1;
  const total = subtotal + tax;
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
                        <span className="cart__book--price">
                          ${(book.salePrice ?? book.originalPrice).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="cart__quantity">{book.quantity}</div>

                    <div className="cart__total">
                      $
                      {(
                        (book.salePrice ?? book.originalPrice) * book.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total">
              <div className="total__item--total__sub-total">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total__item--total__tax">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total__item--total__price">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
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
