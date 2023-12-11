import React from "react";
import Menu from "./Menu";
import Founder from "./Founder";

const Home = () => {
  return (
    <div className="">
      <section className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </div>

        <a className="main-red-button" href="#menu">
          Explore Menu
        </a>
      </section>
      <Menu id="menu" />
      <Founder />
    </div>
  );
};

export default Home;
