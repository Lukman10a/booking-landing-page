import { styled } from "styled-components";
import nav_img from "../assets/images/nav_image.png";
import flags from "../assets/icons/flags.svg";
import profile from "../assets/icons/profile.svg";

const NavBar = () => {
  return (
    <NavContainer>
      <NavImage src={nav_img} alt="" />

      <NavList>
        <li>Hotels</li>
        <li>Brand</li>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Pricing</li>
        <li>Contact</li>
      </NavList>
      <NavIcons>
        <img src={flags} alt="" />
        <img src={profile} alt="" />
      </NavIcons>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavImage = styled.img``;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1200px) {
    gap: 1.2rem;
  }
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2.5rem;
  padding: 10px 0px;
`;
