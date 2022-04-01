import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__contacts">
          <li className="footer__tell">
            Call me: <br />
            <a className="footer__tell-num" href="tell:+996709603067">+966 709 60 30 67</a>
          </li>
          <li className="footer__links">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="footer__links-icon" />
              </a>
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
          </li>
          <li className="footer__email">
            Email: <br />
            <a className="footer__email-text" href="mailto:">msajitbekov@gmail.com</a>
          </li>
        </ul>
        <p class="copytext "> &copy; 2022 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
