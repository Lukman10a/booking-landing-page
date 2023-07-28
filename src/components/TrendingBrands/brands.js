import React, { useState } from "react";
import styled from "styled-components";
import tobams from "../../assets/images/tobams.png";
import next from "../../assets/images/next.png";
import TRENDING_BRAND_DATA from "./trendingbranddata";

console.log(TRENDING_BRAND_DATA);

const Brands = () => {
  const [trendingBrandData, setTrendingBrandData] =
    useState(TRENDING_BRAND_DATA);
  console.log(trendingBrandData);

  return (
    <BrandContainer>
      <h1>Trending Brands </h1>
      <h3>
        Everything looks good with confidence and that confidence is what our
        brands give, a better you.
      </h3>
      <CardContainer>
        {trendingBrandData.map((item) => {
          return (
            <Card key={item.title}>
              <CardImage src={tobams} alt="Hotel Image" />
              <CardTitle>{item.title}</CardTitle>
              <div>{item.detail}</div>
            </Card>
          );
        })}
      </CardContainer>

      <Button>
        <p>View All</p>
        <img src={next} alt="" />
      </Button>
    </BrandContainer>
  );
};

export default Brands;

const BrandContainer = styled.div`
  padding: 40px;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;
const Card = styled.article`
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  color: #202020;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  background-color: #811141;
  color: #fff;
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
