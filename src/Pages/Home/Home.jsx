import React from "react";
import { useRef, useEffect } from "react";
import {Link} from "react-router-dom"
import {init} from "ityped"
import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa"
import authorImg from "../../Pages/Home/author.jpeg";
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
  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__left-title">Привет, Я Максатбек.</h1>
          <p className="home__left-subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p className="home__left-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam quibusdam, saepe minima itaque reiciendis repellat voluptatum unde explicabo perferendis. Consequatur dolor tempore est qui doloribus nam. Sequi, reprehenderit libero!
          </p>
          <ul className="home__left-links">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__left-icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home__left-icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/z/"
                target="_blank"
                rel="noopener noreferrer "
              >
                <FaTelegram className="home__left-icon"/>
              </a>
            </li>
          </ul>
          <Link to="/contacts" className="home__left-cta">
            Найми Меня
          </Link>
        </div>
        <div className="home__right">
          <img className="home__right-img" src={authorImg} alt="Maksatbek" />
        </div>
      </div>
    </section>
  );
}

export default Home;
