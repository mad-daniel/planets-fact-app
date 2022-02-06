import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlanetData } from "../../data/planets";
import {
  Nav,
  LogoLink,
  MenuButton,
  NavList,
  NavItems,
  PlanetLinks,
  Circles,
} from "./Navbar.elements";

const navItems = PlanetData.map((a) => a.name);

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <Nav>
      <Link href="/Earth" passHref>
        <LogoLink>The planets</LogoLink>
      </Link>
      <MenuButton
        onClick={toggleMenu}
        aria-label="Toggle mobile menu button"
        aria-expanded={showMenu ? `true` : `false`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          fill="#FFF"
        >
          <g fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </MenuButton>
      <NavList showMenu={showMenu}>
        {navItems.map((planet, index) => {
          return (
            <NavItems key={index} onClick={closeMenu}>
              <Link href={`/${planet}`}>
                <PlanetLinks planet={planet} href={`/${planet}`}>
                  <Circles aria-hidden="true" planet={planet}></Circles>
                  {planet}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="8"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="#FFF"
                      opacity=".4"
                      d="M1 0l4 4-4 4"
                    />
                  </svg>
                </PlanetLinks>
              </Link>
            </NavItems>
          );
        })}
      </NavList>
    </Nav>
  );
}

export default Navbar;
