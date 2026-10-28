import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    <Router>
    <div className="App">
      <Route />
      <Nav />
      <Home />
      <Footer />
          </div>
          </Router>
  );
}

export default App;