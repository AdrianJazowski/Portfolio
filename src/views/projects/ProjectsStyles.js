/** @format */
import { CardDeck, Card } from "react-bootstrap";
import styled from "styled-components";

export const ProjectCardDeck = styled(CardDeck)`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  justify-content: center;
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 145px 100px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;

  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;
`;
export const CardImg = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  &:hover {
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
export const CardText = styled.div`
  grid-area: text;
  margin: 25px;
`;
export const CardH2 = styled.h2`
  margin-top: 0px;
  font-size: 28px;
`;
export const CardIcons = styled.div`
  font-size: 30px;

  svg {
    margin: 0 15px 25px 15px;
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;
export const CardFooter = styled.a`
  grid-area: stats;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
`;
