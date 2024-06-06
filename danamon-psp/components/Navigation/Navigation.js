import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("menu-shrink");
      } else {
        elementId.classList.remove("menu-shrink");
      }
    };

    const mainNavLinks = document.querySelectorAll("nav ul li a");

    const handleActiveLink = () => {
      const fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (
          section?.offsetTop <= fromTop &&
          section?.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveLink);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []);

  const renderMenus = () => {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link active"
            href="#home"
          >
            Home
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#benefit"
          >
            Benefit
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#features"
          >
            Product & SOLUTION
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#documentation"
          >
            Documentation
          </AnchorLink>
        </li>

        {/* <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#screenshots"
          >
            Screenshots
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#pricing"
          >
            Pricing
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#faqs"
          >
            Faqs
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#blog"
          >
            Blog
          </AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li> */}
         <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li> 
      </ul>
    );
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-md navbar-light top-menu"
      >
        <div className="container">
          <Image
            src="/images/tki.svg"
            alt="App About Image"
            width={120}
            height={125}
          />

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            {renderMenus()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
