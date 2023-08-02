import React from "react";
import hero_img from "../assets/images/hero_image.png";
import styled from "styled-components";
import search from "../assets/images/search.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={hero_img} alt="" />
      <HeroContent>
        <HeroTitle>FIND A HOME FOR YOUR DESIGNS</HeroTitle>
        <SubTitle>pop ups in top class hotels around the world</SubTitle>
        <InputContainer>
          <InputField type="text" placeholder="Enter your text here..." />
          <Button>
            <img src={search} alt="" />
          </Button>
        </InputContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
`;
const HeroImage = styled.img`
  width: 100%;
`;
const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  width: 50%;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    /* padding: 30px; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 40px 10px;
  }
  @media (max-width: 320px) {
    padding: 70px 10px;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 56px;

  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 26px;
  }

  @media (max-width: 425px) {
    font-weight: 100;
    font-size: 18px;
  }

  @media (max-width: 375px) {
    font-weight: 100;
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-weight: 100;
    font-size: 14px;
  }
`;

const SubTitle = styled.p`
  @media (max-width: 425px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }

  @media (max-width: 320px) {
    font-size: 8px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 5px;
    gap: 5px;
  }

  @media (max-width: 320px) {
    margin-top: 2%;
    gap: 4px;
  }
`;

const InputField = styled.input`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 10px;
  }

  @media (max-width: 375px) {
    padding: 6px;
  }
  @media (max-width: 320px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #811141;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 5px 10px;
  }

  @media (max-width: 375px) {
    padding: 2px 6px;
  }

  @media (max-width: 320px) {
    padding: 2px 4px;
  }
`;
