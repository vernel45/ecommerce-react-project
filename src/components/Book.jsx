import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"
import Ratings from "../components/ui/Ratings";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalhitgit Price} />
    </div>
  );
};

export default Book;
