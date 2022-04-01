import React from "react";
import aboutImgs from "../../images/works.png";
import "./about.scss";
import {SiHtml5, SiCss3, SiJavascript, SiSass, SiReact, SiDocker} from "react-icons/si"


function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about__title">Hello am Hero Coder!</h1>
        <span className="about__subtitle">Frontend React Developer</span>
        <div className="about__skills">
          <h3 className="about__skills-title">My Skills</h3>
          <ul className="about__skills-links">
            <li className="about__skills-item">
              <SiHtml5/>HTML
            </li>
            <li className="about__skills-item">
              <SiCss3/>CSS
            </li>
            <li className="about__skills-item">
              <SiJavascript/>JavaScript
            </li>
            <li className="about__skills-item">
              <SiSass/>Sass
            </li>
            <li className="about__skills-item">
              <SiReact/>React
            </li>
            <li className="about__skills-item">
              <SiDocker/>Docker
            </li>
          </ul>
        </div>
        <div className="about__works">
          <h3 className="about__works-title">Laters Worcs</h3>
          <ul className="about__works-blocks">
            <li className="about__works-block">
              <img src={aboutImgs} alt="work" />
              <h4>Works 1</h4>
            </li>
            <li className="about__works-block">
              <img src={aboutImgs} alt="work" />
              <h4>Works 2</h4>
            </li>
            <li className="about__works-block">
              <img src={aboutImgs} alt="work" />
              <h4>Works 3</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
