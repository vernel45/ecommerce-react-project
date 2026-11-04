import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, {useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState ([]);
  
  function addToCart (book) {
    setCart([...cart, {...book, quantity: 1}])
    
  }

  useEffect(() => {
    console.log(cart);
}, [cart])
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart books={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
