import styled from "styled-components";
import { Gutters } from "../shared/helpers";
import { QUERIES } from "../shared/constants";
import { motion } from "framer-motion";

const Wrapper = styled(motion.main)`
  ${Gutters}
  text-align: center;
  padding-bottom: 3rem;

  & > svg {
    margin: 0 auto;
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0 11.5vw;
  }
`;

function MainWrapper({ children }) {
  return (
    <Wrapper
      id="main"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.3,
          },
        },
      }}
    >
      {children}
    </Wrapper>
  );
}

export default MainWrapper;
