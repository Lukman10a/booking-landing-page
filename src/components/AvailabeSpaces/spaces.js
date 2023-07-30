import React, { useState } from "react";
import styled from "styled-components";
import location from "../../assets/images/location.png";
import next from "../../assets/images/next.png";
import star from "../../assets/icons/star.svg";
import SPACE_DATA from "./spacedata";

console.log(SPACE_DATA);

const Space = () => {
  const [spaceData, setSpaceBrandData] = useState(SPACE_DATA);
  return (
    <SpaceContainer>
      <h1>Available Hotel Spaces </h1>
      <h3>Unlock Your Creative Haven: get Your Dream Space Today</h3>
      <CardContainer>
        {spaceData.map((data) => {
          return (
            <Card key={data.title}>
              <CardImage src={data.img} alt="Hotel Image" />
              <CardTitle>{data.title}</CardTitle>
              <CardDetail>
                <LocationContent>
                  <img src={location} alt="" />
                  <Location>{data.location}</Location>
                </LocationContent>
                <RatingContent>
                  <img src={star} alt="Star Rating" />
                  <Rating>{data.rating}</Rating>
                </RatingContent>
              </CardDetail>
              <Status>{data.status}</Status>
              <Price>{data.price}</Price>
            </Card>
          );
        })}
      </CardContainer>

      <Button>
        <p>View All</p>
        <img src={next} alt="" />
      </Button>
    </SpaceContainer>
  );
};

export default Space;

const SpaceContainer = styled.div`
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

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LocationContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Location = styled.p`
  font-size: 14px;
  color: #888;
`;

const RatingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #888;
`;

const Status = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #811141;
  font-style: italic;
  font-family: Poppins;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
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
