export const COLORS = {
  primary: "0, 0%, 100%",
  secondary: "hsl(240, 67%, 8%)",
  hover: "rgba(216, 216, 216, .2)",
  mercury: {
    menu: "hsl(196, 83%, 93%)",
    main: "hsl(194, 48%, 49%)",
  },
  venus: {
    menu: "hsl(39, 88%, 73%)",
    main: "hsl(33, 82%, 61%)",
  },
  earth: {
    menu: "hsl(238, 99%, 66%)",
    main: "hsl(263, 67%, 51%)",
  },
  mars: {
    menu: "hsl(12, 100%, 64%)",
    main: "hsl(10, 63%, 51%)",
  },
  jupiter: {
    menu: "hsl(27, 75%, 70%)",
    main: "hsl(2, 68%, 53%)",
  },
  saturn: {
    menu: "hsl(40, 96%, 70%)",
    main: "hsl(17, 73%, 46%)",
  },
  uranus: {
    menu: "hsl(168, 82%, 67%)",
    main: "hsl(169, 73%, 44%)",
  },
  neptune: {
    menu: "hsl(222, 95%, 63%)",
    main: "hsl(222, 87%, 56%)",
  },
};

export const BREAKPOINTS = {
  tabletMin: 768,
  laptopMin: 992,
  desktopMin: 1200,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
