/** @format */
import { CardDeck, Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import bgPhoto from "../../assets/bgForPages.jpg";
import cardReverse from "../../assets/cardReverse.jpg";

export const ProjectPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgPhoto});
  margin: 0;
`;

export const ProjectCardDeck = styled(CardDeck)`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
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
// export const CardImg = styled.img`
//   width: 100%;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   &:hover {
//     transform: scale(1.15);
//     box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
//   }
// `;
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
  text-align: center;
  margin-top: 10px;

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

export const Cardwrapper = styled.div`
  margin: 100px auto 0;
  width: 400px;
  height: 600px;
  perspective: 1000px;
`;
export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;
export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  /* background-image: linear-gradient(to bottom right, #ffce00, #fe4880); */
  background-image: url(${cardReverse});
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    font-size: 32px;
  }
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  background-color: #f3f3f3;
  transform: rotateY(180deg);
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const CardHeader = styled.div`
  position: relative;
  padding: 30px 30px 40px;
  height: 40%;
  h2 {
    color: black;
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const CardImg = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 5px solid #fff;
  object-fit: cover;
`;
export const CardBody = styled.div`
  padding: 30px;
  text-align: center;
  height: 50%;
  h3 {
    color: #212121;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    color: #212121;
    font-size: 18px;
    line-height: 1.4;
  }
`;
