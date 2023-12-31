import React from "react";
import { styled } from "styled-components";
import exclusive_brand from "../assets/images/exclusive_brand.png";

const ExlusiveBrands = () => {
  return (
    <ExclusiveBrandContainer>
      <h1>Meet Our Verified Exclusive Brands</h1>
      <BrandContainer>
        <ImageContainer>
          <BrandImage src={exclusive_brand} alt="" />
        </ImageContainer>
        <RightContainer>
          <p>Exceptional Brands</p>
          <p>Exclusive Brands</p>
          <p>Verified for Quality Services</p>
          <Button>
            <p>Learn More</p>
            <ButtonIcon></ButtonIcon>
          </Button>
        </RightContainer>
      </BrandContainer>
    </ExclusiveBrandContainer>
  );
};

export default ExlusiveBrands;

const ExclusiveBrandContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  /* width: 50%;
  max-width: 500px; */

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

const BrandImage = styled.img`
  width: 100%;
`;

const RightContainer = styled.div`
  background-color: #ffeff6;
  width: 50%;
  padding: 51px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px;
    width: 85%;
    gap: 15px;
  }

  @media (max-width: 425px) {
    padding: 40px;
    width: 78%;
    gap: 10px;
  }

  @media (max-width: 320px) {
    padding: 30px;
    width: 75%;
    gap: 8px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  background-color: #ffff;
  color: #811141;
  padding: 5px 15px 5px 15px;
  margin-top: 40px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9e1e55;
    color: #fff;
  }

  @media (max-width: 768px) {
    align-self: center;
    margin-top: 20px;
  }
`;

const ButtonIcon = styled.div`
  background-color: #811141;
  border-radius: 20px;
  width: 15px;
  height: 15px;

  &:hover {
    background-color: #fff;
  }
`;
