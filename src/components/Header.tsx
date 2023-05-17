import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./Menu";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div className="logo">Cassie</div>
        </Link>
        <nav className="nav">
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let's work together</a>
        </div>
        <div
          onClick={() => setMenuOpen(true)}
          className="hamburger-menu"
        >
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </motion.div>
  );
};

export default Header;
