import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
// import { FaLinkedinIn } from "react-icons/fa";
import { styled } from "styled-components";
import nav_img from "../assets/images/nav_image.png";
import flags from "../assets/icons/flags.svg";
import profile from "../assets/icons/profile.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <NavContainer>
      <NavImage src={nav_img} alt="" />

      <NavList isMobileMenuOpen={isMobileMenuOpen}>
        <li>Hotels</li>
        <li>Brand</li>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Pricing</li>
        <li>Contact</li>
        <NavIcons>
          <img src={flags} alt="" />
          <img src={profile} alt="" />
        </NavIcons>
      </NavList>

      <HamburgerMenuButton onClick={handleMobileMenuToggle}>
        <AiOutlineMenu size={24} />
        {/* <MobileNavIcons>
          <BiLogoFacebook />
          <FaLinkedinIn />
          <BiLogoInstagram />
        </MobileNavIcons> */}
      </HamburgerMenuButton>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavImage = styled.img``;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1200px) {
    gap: 1.2rem;
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50px;
    right: 20px;
    width: 90%;
    height: 80%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 1;
    gap: 2rem;
    border-radius: 15px;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2.5rem;
`;

const HamburgerMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    gap: 5px;
    z-index: 2;
  }
`;
