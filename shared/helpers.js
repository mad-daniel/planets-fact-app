import { css } from "styled-components";

export const BaseUnderline = css`
  position: relative;
  transition: opacity 0.2s;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    left: 50%;
    height: 0.25rem;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s, width 0.2s, left 0.2s;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
    width: 100%;
    left: 0;
  }
`;

export const Gutters = css`
  padding-left: clamp(6%, 6vw, 2.5rem);
  padding-right: clamp(6%, 6vw, 2.5rem);
`;

export const PlanetSize = css`
  ${({ name }) => {
    switch (name) {
      case "Mercury":
        return "6.9375rem";
      case "Venus":
        return "9.625rem";
      case "Earth":
        return "10.8125rem";
      case "Mars":
        return "8.0625rem";
      case "Jupiter":
        return "14rem";
      case "Saturn":
        return "16rem";
      case "Uranus":
        return "11rem";
      case "Neptune":
        return "10.8125rem";
    }
  }};
`;

export const PlanetColors = css`
  ${({ name, planet }) => {
    switch (name || planet) {
      case "Mercury":
        return "var(--color-mercury-main)";
      case "Venus":
        return "var(--color-venus-main)";
      case "Earth":
        return "var(--color-earth-main)";
      case "Mars":
        return "var(--color-mars-main)";
      case "Jupiter":
        return "var(--color-jupiter-main)";
      case "Saturn":
        return "var(--color-saturn-main)";
      case "Uranus":
        return "var(--color-uranus-main)";
      case "Neptune":
        return "var(--color-neptune-main)";
    }
  }};
`;

export const SRonly = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
