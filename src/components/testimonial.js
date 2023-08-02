import { styled } from "styled-components";
import next from "../assets/images/next.png";
import stars from "../assets/images/stars.png";

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <h1>What Our Clients Are Saying About Us</h1>
      <CardContainer>
        <Card>
          <TitleContainer>
            <h3>Manager, The Vineyard</h3>
            <img src={stars} alt="" />
          </TitleContainer>
          <p>
            “Our collaboration with Hotels Fashion has been a game-changer for
            us. The unique and beautifully designed products showcased in our
            hotel have received an overwhelmingly positive response from our
            guests”
          </p>
        </Card>
        <Card>
          <TitleContainer>
            <h3>Manager, The Vineyard</h3>
            <img src={stars} alt="" />
          </TitleContainer>
          <p>
            “Our collaboration with Hotels Fashion has been a game-changer for
            us. The unique and beautifully designed products showcased in our
            hotel have received an overwhelmingly positive response from our
            guests”
          </p>
        </Card>
        <Card>
          <TitleContainer>
            <h3>Manager, The Vineyard</h3>
            <img src={stars} alt="" />
          </TitleContainer>
          <p>
            “Our collaboration with Hotels Fashion has been a game-changer for
            us. The unique and beautifully designed products showcased in our
            hotel have received an overwhelmingly positive response from our
            guests”
          </p>
        </Card>
      </CardContainer>
      <Button>
        <p>View All</p>
        <img src={next} alt="" />
      </Button>
    </TestimonialContainer>
  );
};

export default Testimonial;

const TestimonialContainer = styled.div`
  background-color: #f49ac1ab;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #811141;
  color: #fff;
  padding: 5px 15px 5px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9e1e55;
  }
`;
