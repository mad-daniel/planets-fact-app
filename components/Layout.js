import Navbar from "./Navbar/Navbar";
import MainWrapper from "./MainWrapper";
import { QUERIES } from "../shared/constants";
import styled, { keyframes } from "styled-components";

const stars = "/background-stars.svg";

const animatedBg = keyframes`
 0%{	
    transform: translate3d(0, 0, 0);
 }	
  100% {
    transform: translate3d( 0, -1200px, 0);}
`;

const Bg = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 3873px;
    top: -30%;
    left: -50%;
    z-index: -1;
    background-image: url(${stars});

    @media ${QUERIES.tabletAndUp} {
      animation: ${animatedBg} 30s linear infinite;
      background-repeat: repeat;
    }
  }
`;

const SkipLinks = styled.a`
  background: var(--color-earth-main);
  color: #fff;
  padding: 0.25rem;
  left: 0.5rem;
  top: 0;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;

  &:focus {
    transform: translateY(0%);
  }
`;

function Layout({ children }) {
  return (
    <Bg>
      <SkipLinks href="#main">Skip to main content</SkipLinks>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </Bg>
  );
}

export default Layout;
