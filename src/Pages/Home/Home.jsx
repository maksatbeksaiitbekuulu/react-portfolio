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
      strings: ["Frontend React Developer"],
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
            Hello, I'm Maksatbek.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
            quibusdam, saepe minima itaque reiciendis repellat voluptatum unde
            explicabo perferendis. Consequatur dolor tempore est qui doloribus
            nam. Sequi, reprehenderit libero!
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
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home__left-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/z/"
                target="_blank"
                rel="noopener noreferrer "
              >
                <FaTelegram className="home__left-icon" />
              </a>
            </li>
          </motion.ul>
          <Link to="/contacts" className="home__left-cta">
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
