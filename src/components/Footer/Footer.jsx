import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contacts">
          <div className="footer__connection">
            <p>
            Почта: <br />
            <a className="footer__connection-text" href="mailto:">msajitbekov@gmail.com</a></p>
            <p>
            Тел: <br />
            <a className="footer__connection-text" href="tell:+996709603067">+966 709 60 30 67</a></p>
          </div>
          <ul className="footer__links">
            <li>
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="footer__links-icon" />
              </motion.a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__links-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/z/"
                target="_blank"
                rel="noopener noreferrer "
              >
                <FaTelegram className="footer__links-icon" />
              </a>
            </li>
          </ul>
        </div>
        <p className="copytext "> &copy; 2022 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
