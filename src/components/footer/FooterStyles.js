/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";
import bgPhoto from "../../assets/bgForPages.jpg";

export const FooterStyles = styled.div`
  background-image: url(${bgPhoto});
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);

  text-align: center;
`;

export const FooterMedia = styled.div``;
export const FooterH2 = styled.h2`
  margin: 0;
  padding-top: 24px;
  color: #fff;
`;
export const FooterIcons = styled.div`
  font-size: 75px;
  margin: 0;
  svg {
    color: rgba(15, 193, 107, 0.5);
    margin: 0 10px 15px 10px;
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;
export const FooterNavigation = styled.div`
  margin: 24px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  margin: 25px 15px;
  &:hover {
    color: rgba(15, 193, 107, 0.5);
  }
`;
export const FooterP = styled.p`
  color: #fff;
  margin: 0;
`;
