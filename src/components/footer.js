import { styled } from "styled-components";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <h4>Helpful Tips</h4>
          <p>How it Works </p>
          <p>Rent Space </p>
          <p>Hotels Dashboard</p>
          <p>Trending Hotels</p>
          <p>Verified Brands</p>
        </div>
        <div>
          <h4>Quicklinks</h4>
          <p>About Us </p>
          <p>FAQs</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div>
          <h4>Discover </h4>
          <p>Discover</p>
          <p>City Guide</p>
          <p>Blog</p>
          <p>Reviews</p>
          <p>Events</p>
        </div>
        <div>
          <p>
            Get updates about available spaces, weekly digest of our most
            important activities and more in your email
          </p>
          <InputContainer>
            <InputField type="text" placeholder=" Enter Your Email Address" />
            <Button>Subscribe</Button>
          </InputContainer>
          <p>mailto:theteam@hotelsfashion.com</p>
          <LogoContainer>
            <BiLogoFacebook />
            <FaLinkedinIn />
            <BiLogoInstagram />
            <AiOutlineTwitter />
          </LogoContainer>
        </div>
      </FooterContainer>
      <FooterButtom>
        <span>Hotels Fashion</span>
        <span>&#169;</span>
        <span>{2023}. </span>
        <span>All Rights Reserved. </span>
      </FooterButtom>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  padding: 10px 60px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #811141;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
`;
const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const FooterButtom = styled.div`
  background-color: black;
  display: flex;
  color: #fff;
  padding: 10px 0px 10px 40px;
  gap: 10px;
  /* width: 100%; */
`;