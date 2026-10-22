import './index.css';
import Nav from "./components/Nav";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing /> 
      <Highlights />
    </div>
  );
}

export default App;