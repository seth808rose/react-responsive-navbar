import React, { useState } from "react";
import { navLinks, navSocial } from "../info";
import { FaBars, FaTwitter, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='navigationCenter'>
        <div className='navigationHeader'>
          <h2>Comet</h2>
          <button
            className='btn'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "linksContainer show-container" : "linksContainer "
          }`}
        >
          <ul className='navLinks'>
            {navLinks.map((links) => {
              const { id, url, text } = links;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='navSocial'>
          {navSocial.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
