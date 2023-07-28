import "./App.css";
import Hero from "./components/hero";
import HotelBrand from "./components/hotels";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HotelBrand />
    </div>
  );
}

export default App;
