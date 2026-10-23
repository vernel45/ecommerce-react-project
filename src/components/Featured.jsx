import React from "react";
import Book from "./Book";
import BestBooks from "./ui/BestBooks";
import { books } from "../data.js";

const Featured = () => {
  console.log(books);
   return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books.filter((book) => book.rating === 5).slice(0, 4)}
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
