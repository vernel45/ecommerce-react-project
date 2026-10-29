import Book from "../components/Book";
import React, { useState } from "react";

const Books = ({ books }) => {
  const [sortBy, setSortBy] = useState("");
  
const sortedBooks = [...(books || [])].sort((a, b) => {
    if (sortBy === "LOW_TO_HIGH") {
      return (a.salePrice ?? a.originalPrice) - (b.salePrice ?? b.originalPrice);
    }
    if (sortBy === "HIGH_TO_LOW") {
      return b.salePrice - a.salePrice;
    }
    if (sortBy === "RATING") {
      return b.rating - a.rating;
    }
    return 0;
  });

  
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="DEFAULT"  disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {sortedBooks.map((book) => {
                  return <Book book={book} key={book.id} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
