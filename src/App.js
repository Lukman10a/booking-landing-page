import { styled } from "styled-components";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Brands from "./components/TrendingBrands/brands";
import HotelBrand from "./components/TrendingHotels/hotels";
import ExlusiveBrands from "./components/exclusivebrands";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Hero />
      <HotelBrand />
      <Brands />
      <ExlusiveBrands />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #d8d8d8;
`;
