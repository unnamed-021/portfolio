import React, { useEffect, useState } from "react";

import {
  HeaderContainer,
  NavLinks,
  Link,
  HamburgerMenu,
  LogoContainer,
  StyledNavLinks,
} from "./Header.styles";

import { ReactComponent as Code } from "../../assets/icons/code.svg";
import Menu from "../utils/Menu";

const Header = ({
  onAboutClick,
  onProjectsClick,
  setShowContact,
  onContactClick,
  showContact,
  setErrors,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(menuOpen);
  const [animation, setAnimation] = useState(true);
  const [logoClick, setLogoClick] = useState(false);

  useEffect(() => {
    let timer;
    if (menuOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 200);
    }

    return () => clearTimeout(timer);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (logoClick) {
      setTimeout(() => {
        setLogoClick(false);
      }, 1000);
    } else {
      setLogoClick(false);
    }
  }, [logoClick]);

  return (
    <HeaderContainer $open={menuOpen}>
      <LogoContainer $invisible>
        <Code />
      </LogoContainer>
      <LogoContainer
        $click={logoClick}
        onClick={() => {
          setLogoClick(true);
          if (showContact) {
            setShowContact(false);
            setAnimation(false);
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }
        }}
      >
        <Code />
      </LogoContainer>

      <NavLinks>
        <Link
          onClick={() => {
            setShowContact(false);
            setAnimation(false);
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Home
        </Link>

        <Link
          onClick={() => {
            setShowContact(false);
            setAnimation(false);
            setMenuOpen(false);

            if (showContact) {
              setTimeout(() => {
                onAboutClick();
              }, 300);
            } else {
              onAboutClick();
            }
          }}
        >
          About
        </Link>

        <Link
          onClick={() => {
            setShowContact(false);
            setAnimation(false);
            setMenuOpen(false);
            if (showContact) {
              setTimeout(() => {
                onProjectsClick();
              }, 300);
            } else {
              onProjectsClick();
            }
          }}
        >
          Projects
        </Link>

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            onContactClick();
            setMenuOpen(false);
            setErrors({});
          }}
        >
          Contact
        </Link>
      </NavLinks>
      {isVisible && (
        <StyledNavLinks $open={menuOpen}>
          <Link
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => {
                setShowContact(false);
                setAnimation(false);
                window.scrollTo(0, 0);
              }, 300);
            }}
          >
            Home
          </Link>

          <Link
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => {
                setShowContact(false);
                setAnimation(false);
                if (showContact) {
                  setTimeout(() => {
                    onAboutClick();
                  }, 300);
                } else {
                  onAboutClick();
                }
              }, 300);
            }}
          >
            About
          </Link>

          <Link
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => {
                setShowContact(false);
                setAnimation(false);
                if (showContact) {
                  setTimeout(() => {
                    onProjectsClick();
                  }, 300);
                } else {
                  onProjectsClick();
                }
              }, 300);
            }}
          >
            Projects
          </Link>

          <Link
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => {
                onContactClick();
                setAnimation(false);
                window.scrollTo(0, 0);
                setErrors({});
              }, 300);
            }}
          >
            Contact
          </Link>
        </StyledNavLinks>
      )}
      <HamburgerMenu $open={menuOpen}>
        <Menu
          onClick={() => {
            setMenuOpen(!menuOpen);
            setAnimation(true);
          }}
          animation={animation}
        />
      </HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;
