import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.3; // 10% of the window height

      if (scrollPosition > scrollThreshold) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <Nav
      className={`Navbar flex items-center ${isNavActive ? "floting-nav" : ""}`}
    >
      <div className="container px-4 ">
        <nav className=" relative md:static md:flex ">
          <div className="navbar-heder flex justify-between items-center">
            <div className="logo  h-12 flex items-center">
              <a href="" className="">
                <img src="./assets/logo.png" alt="logo" />
              </a>
            </div>
            <div className="menu-icon h-full cursor-pointer md:hidden">
              {showMenu ? (
                <IoMdClose size={34} className="icon" onClick={toggleMenu} />
              ) : (
                <FaBars size={34} className="icon" onClick={toggleMenu} />
              )}
            </div>
          </div>

          <div
            className={`navbar-footer w-full md:w-auto absolute md:static ${
              showMenu ? "block" : "hidden"
            } md:block `}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-12">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.header`
  background: var(--bg-gradient);
  height: 72px;
  top: -50%;
  transition: all var(--smooth-2);
  &.Navbar.floting-nav {
      background: var(--primary-color);
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 999999;
    }
  .navbar-heder {
    .logo {
      img {
        width: 9.3rem;
      }
    }
    .icon {
      color: var(--white);
      border: 1px solid var(--white);
      padding: 3px;
      opacity: 0.7;
    }
  }
  .navbar-footer {
    z-index: 1234;
    background-color: var(--yellow);

    color: var(--white);
    padding: 10px 20px;

    animation-name: menuAnimation;
    animation-duration: 0.2s;
    ul {
      a {
        font-weight: 600;
        font-size: var(--font-size-6);
      }
    }
  }

  @keyframes menuAnimation {
    0% {
      height: 0px;
      opacity: 0;
    }
    100% {
      opacity: 1;
      height: 100px;
    }
  }

  @media (min-width: 768px) {
    height: 120px;
   
    .logo img {
      width: 15.6rem !important ;
    }
    .container {
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .navbar-footer {
      height: 100%;
      margin-left: 2rem;
      margin-top: 0.5rem;
      background-color: transparent;
      ul {
        height: 100%;
        li {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          a {
            font-weight: 500 !important;
          }
          &::after {
            position: absolute;
            content: "";
            width: 30px;
            background-color: var(--yellow);
            border-radius: 2px;
            height: 3px;
            opacity: 0;
            bottom: -150%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            transition: all var(--smooth-1);
          }
          &:hover {
            &::after {
              opacity: 1;
              bottom: -100%;
            }
          }
        }
      }
    }
  }
`;
