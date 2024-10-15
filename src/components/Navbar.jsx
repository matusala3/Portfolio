import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  useEffect(() => {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgba(24, 24, 24, 1)";
      } else {
        navbar.style.backgroundColor = "rgba(24, 24, 24, 0.9)";
      }
    };

    const toggleBurgerMenu = () => {
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    };

    window.addEventListener("scroll", handleScroll);
    burgerMenu.addEventListener("click", toggleBurgerMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      burgerMenu.removeEventListener("click", toggleBurgerMenu);
    };
  }, []);

  return (
    <nav id="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="burger-menu" id="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
