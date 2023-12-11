// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <br />
        <p>
          All rights reserved by @burgershop &#9400; {new Date().getFullYear()}
        </p>
      </div>
      <aside>
        <h4>FollowUs</h4>
        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
