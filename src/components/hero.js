// import React from "react";
// import hero_img from "../assets/images/hero_image.png";
// import styled from "styled-components";
// import search from "../assets/images/search.png";

// const Hero = () => {
//   return (
//     <HeroContainer>
//       <HeroImage src={hero_img} alt="" />
//       <HeroContent>
//         <HeroTitle>FIND A HOME FOR YOUR DESIGNS</HeroTitle>
//         <p>pop ups in top class hotels around the world</p>
//         <InputContainer>
//           <InputField type="text" placeholder="Enter your text here..." />
//           <Button>
//             <img src={search} alt="" />
//           </Button>
//         </InputContainer>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default Hero;

// const HeroContainer = styled.div`
//   width: 1000px;
//   position: relative;
// `;
// const HeroContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 70%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: #fff;

// `;
// const HeroTitle = styled.h1`
//   font-weight: 600;
//   font-size: 56px;
// `;
// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;
// const InputField = styled.input`
//   padding: 20px 660px 20px 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
// `;
// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #811141;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   margin-left: 10px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const HeroImage = styled.img`
//   width: 98.7vw;
// `;

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
        <p>pop ups in top class hotels around the world</p>
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
  /* max-width: 1000px; */
  position: relative;
  /* margin: 0 auto; */
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  width: 80%;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 120%;
    padding: 30px 20px;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 56px;

  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 26px;
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
`;

const HeroImage = styled.img`
  width: 100%;
`;
