import { createGlobalStyle } from "styled-components";
import { COLORS } from "../shared/constants";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: hsl(var(--color-white));
}

/* Remove list styles on ul, ol elements which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

a {
  text-decoration-skip-ink: auto;
  text-decoration: none;
  color: var(--color-white);
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:root {
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-light: 400;

  --font-family: 'Spartan', sans-serif;
  --font-family-antonio: 'Antonio', sans-serif;

  --color-white: ${COLORS.primary};
  --color-background: ${COLORS.secondary};
  --color-hover: ${COLORS.hover};

  //MOBILE
  --color-mercury-menu: ${COLORS.mercury.menu};
  --color-venus-menu: ${COLORS.venus.menu};
  --color-earth-menu: ${COLORS.earth.menu};
  --color-mars-menu: ${COLORS.mars.menu};
  --color-jupiter-menu: ${COLORS.jupiter.menu};
  --color-saturn-menu: ${COLORS.saturn.menu};
  --color-uranus-menu: ${COLORS.uranus.menu};
  --color-neptune-menu:${COLORS.neptune.menu};

  //MAIN
  --color-mercury-main: ${COLORS.mercury.main};
  --color-venus-main: ${COLORS.venus.main};
  --color-earth-main: ${COLORS.earth.main};
  --color-mars-main: ${COLORS.mars.main};
  --color-jupiter-main: ${COLORS.jupiter.main};
  --color-saturn-main: ${COLORS.saturn.main};
  --color-uranus-main: ${COLORS.uranus.main};
  --color-neptune-main:${COLORS.neptune.main};
}
`;
export default GlobalStyle;
