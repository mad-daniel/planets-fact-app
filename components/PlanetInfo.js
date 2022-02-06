import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { QUERIES } from "../shared/constants";

const Wrapper = styled.div`
  grid-area: info;
  max-width: 34.375rem;
  margin: 0 auto;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: column;
    max-width: revert;
    margin: revert;
  }
`;

const Overview = styled(motion.p)`
  font-size: 0.75rem;
  line-height: 2;
  padding: 0 0.5rem 2rem;
  order: 4;

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
    flex-basis: 10.375rem;
  }

  @media ${QUERIES.desktopAndUp} {
    font-size: 0.875rem;
    line-height: 1.79;
    flex-basis: 10.9375rem;
  }
`;

const Source = styled.div`
  font-size: 0.75rem;
  order: 5;
  opacity: 0.5;
  transition: opacity 0.25s ease;
  pointer-events: none;

  &:hover,
  &:focus-within {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-grow: 1;
  }

  @media ${QUERIES.desktopAndUp} {
    font-size: 0.875rem;
    padding-top: 1.5rem;
  }

  svg {
    margin-left: 0.25rem;
    vertical-align: middle;

    @media ${QUERIES.tabletAndUp} {
      margin-left: 0.5rem;
    }
  }
`;

const WikiLink = styled.a`
  text-decoration: underline;
  font-weight: 700;
  pointer-events: auto;
`;

function PlanetInfo({ name, activeTab, overview, structure, geology }) {
  let planetInfo;
  let wikiSource;

  if (activeTab === "Overview") {
    planetInfo = overview.content;
    wikiSource = overview.source;
  } else if (activeTab === "Structure") {
    planetInfo = structure.content;
    wikiSource = structure.source;
  } else {
    planetInfo = geology.content;
    wikiSource = geology.source;
  }
  return (
    <Wrapper exit={{ opacity: 0 }}>
      <AnimatePresence exitBeforeEnter>
        <Overview
          key={name}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.8,
                ease: "anticipate",
              },
            },
          }}
        >
          {planetInfo}
        </Overview>
      </AnimatePresence>
      <Source>
        <span>Source : </span>
        <WikiLink href={wikiSource} target="_blank">
          Wikipedia
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            />
          </svg>
        </WikiLink>
      </Source>
    </Wrapper>
  );
}

export default PlanetInfo;
