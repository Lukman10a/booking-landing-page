import React from "react";
import { styled } from "styled-components";
import exclusive_brand from "../assets/images/exclusive_brand.png";

const ExlusiveBrands = () => {
  return (
    <ExclusiveBrandContainer>
      <h1>Meet Our Verified Exclusive Brands</h1>
      <BrandContainer>
        <div>
          <img src={exclusive_brand} alt="" />
        </div>
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
`;

const BrandContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #ffeff6;
  width: 100%;
  padding: 80px;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
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
