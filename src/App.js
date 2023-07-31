import { styled } from "styled-components";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Brands from "./components/TrendingBrands/brands";
import HotelBrand from "./components/TrendingHotels/hotels";
import ExlusiveBrands from "./components/exclusivebrands";
import Space from "./components/AvailabeSpaces/spaces.js";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Hero />
      <HotelBrand />
      <Brands />
      <ExlusiveBrands />
      <Space />
      <Testimonial />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #d8d8d8;
`;
