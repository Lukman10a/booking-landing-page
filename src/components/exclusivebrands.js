import React from "react";
import { styled } from "styled-components";

const ExlusiveBrands = () => {
  return (
    <div>
      <div></div>
      <RightContainer>
        <p>Exceptional Brands</p>
        <p>Exclusive Brands</p>
        <p>Verified for Quality Services</p>
        <Button>
          <p>Learn More</p>
          <div></div>
        </Button>
      </RightContainer>
    </div>
  );
};

export default ExlusiveBrands;

const RightContainer = styled.div`
  background-color: #ffeff6;
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
  }
`;
