import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"
import Ratings from "../components/ui/Ratings";
import Price from "./ui/Price";

const Book = ({ book }) => {
  function imageLoaded() {
    console.log('image loaded');
  }
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" onLoad={imageLoaded} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
