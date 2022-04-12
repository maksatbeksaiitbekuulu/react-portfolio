import React from "react";
import aboutImgs from "../../images/works.png";
import { motion } from "framer-motion";
import "./about.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
} from "react-icons/si";

function About() {
  const skillsAnimation = {
    hidden: {
      y: -1000,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const worksVariants = {
    hidden: {
      opacity: 0,
      x:300
    },
    visible: (id) =>({
      opacity: 1,
      x:0,
      transition:{
        delay: id*0.5
      }
    }),
  };

  const works = [
    {
      title: "Works1",
      imgUrl: aboutImgs,
    },
    {
      title: "Works1",
      imgUrl: aboutImgs,
    },
    {
      title: "Works1",
      imgUrl: aboutImgs,
    },
  ];
  return (
    <section className="about">
      <div className="container">
        <motion.h1
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            duration: 2,
            type: "spring",
          }}
          className="about__title"
        >
          Привет, герой кодер!
        </motion.h1>
        <span className="about__subtitle">Frontend React Разработчик</span>
        <div className="about__skills">
          <motion.h3
            initial={{
              x: -1000,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="about__skills-title"
          >
            Мои навыки
          </motion.h3>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            className="about__skills-links"
          >
            <motion.li
              custom={1}
              variants={skillsAnimation}
              className="about__skills-item"
            >
              <SiHtml5 />
              HTML
            </motion.li>
            <motion.li
              custom={2}
              variants={skillsAnimation}
              className="about__skills-item"
            >
              <SiCss3 />
              CSS
            </motion.li>
            <motion.li
              custom={3}
              variants={skillsAnimation}
              className="about__skills-item"
            >
              <SiJavascript />
              JavaScript
            </motion.li>
            <motion.li
              custom={4}
              variants={skillsAnimation}
              className="about__skills-item"
            >
              <SiSass />
              Sass
            </motion.li>
            <motion.li
              custom={5}
              variants={skillsAnimation}
              className="about__skills-item"
            >
              <SiReact />
              React
            </motion.li>
          </motion.ul>
        </div>
        <div className="about__works">
          <h3 className="about__works-title">Позже работает</h3>
          <ul className="about__works-blocks">
            {
              works.map((work, id)=>(
                <motion.li 
                variants={worksVariants}
                initial="hidden"
                animate="visible"
                key={id}
                custom={id}
                className="about__works-block">
                  <img src={work.imgUrl} alt="Work" />
                  <h4>{work.title}</h4>
                </motion.li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
