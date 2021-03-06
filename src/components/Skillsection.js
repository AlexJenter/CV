import React from "react";
import Skillitem from "./Skillitem";

export default () => (
  <section className="section section--skills">
    <h2>Skills</h2>
    <div className="section__content">
      <div>
        <h3>Code</h3>
        <ul>
          <Skillitem score="9" name="HTML/CSS" />
          <Skillitem score="8" name="Javascript" />
          <Skillitem score="7" name="Twig" />
          <Skillitem score="7" name="PHP" />
          <Skillitem score="5" name="Bash" />
          <Skillitem score="3" name="Python" />
        </ul>
      </div>
      <div>
        <h3>Design</h3>
        <ul>
          <Skillitem score="9" name="Adobe CC" />
          <Skillitem score="8" name="Sketch.app" />
        </ul>
      </div>
    </div>
  </section>
);
