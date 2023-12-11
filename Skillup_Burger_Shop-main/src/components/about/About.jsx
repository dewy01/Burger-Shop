import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="about">
      <main style={{ height: "65vh" }}>
        <h1>About Us</h1>

        <article>
          <h4>Burger Shop</h4>
          <p>
            This is Burger Shop. The place for the most delicious burgers in the
            whole world.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;
