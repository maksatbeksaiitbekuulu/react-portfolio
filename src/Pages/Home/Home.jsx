import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { init } from "ityped";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import authorImg from "../../images/author.jpeg";
import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React разработчик"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);
  const textAnimation = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className="home">
      <div className="container home__container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="home__left"
        >
          <motion.h1
            custom={1}
            variants={textAnimation}
            className="home__left-title"
          >
            Привет! Я Максатбек.
          </motion.h1>
          <motion.p
            custom={2}
            variants={textAnimation}
            className="home__left-subtitle"
          >
            <span ref={animatedTextRef}></span>
          </motion.p>
          <motion.p
            custom={3}
            variants={textAnimation}
            className="home__left-text"
          >
           Я закончил несколько курсов фронтенд-разработчика. Мой общий стаж разработки — год. Я неплохо разбираюсь в vanilla Javascript, предпочитаю использовать современную семантическую верстку HTML5, а также модули SASS/LESS/SCSS, Webpack или Gulp и классы стилей по методологии БЭМ.
          </motion.p>
          <motion.ul
            custom={4}
            variants={textAnimation}
            className="home__left-links"
          >
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__left-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sayitbekuulumaksat/?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home__left-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/MaksatbekSaiitbekuulu"
                target="_blank"
                rel="noopener noreferrer "
              >
                <FaTelegram className="home__left-icon" />
              </a>
            </li>
          </motion.ul>
          <Link to="/contact" className="home__left-cta">
            Hire Me
          </Link>
        </motion.div>
        <div className="home__right">
          <motion.img
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeatDelay: 10,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
            }}
            className="home__right-img"
            src={authorImg}
            alt="Maksatbek"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
