import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./Book";
import BestBooks from "./ui/BestBooks";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
