import React from "react";
import { useParams } from "react-router";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BestBooks from "../components/ui/BestBooks";

const BookInfo = ({ books, addItemToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id == +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  className="book__selected--ig"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the coding interview{" "}
                </h2>
                <Ratings rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>
                <button className="btn" onClick={() => addItemToCart(book)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
                </h2>
            </div>
 </div>
      </main>
    </div>
   
  );
};

export default BookInfo;
