import React from "react";
import authorImg from "../../Pages/Home/author.jpeg";
import "./home.scss";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row__main">
          <div className="author__texts">
            <h1 className="author__texts-title">
              Привет! Я Максатбек, Фронтенд разработчик
            </h1>
          </div>
          <img className="author__img" src={authorImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
