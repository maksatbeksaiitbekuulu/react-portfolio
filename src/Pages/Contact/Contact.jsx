import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaDiscord, FaTelegram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.scss";


function Contact() {
  const iconsAnimation = {
    hidden: {
      y: -1000,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className="contact">
      <div className="container">
        <h1>Контакты</h1>
        <p style={{lineHeight: "40px"}}>
          На данной странице вы найдете все возможные варианты связаться со мной. <br />
          В Discord, Email я бываю не часто. Поэтому, наиболее быстрый способ со
          мной связаться — это Telegram или WhatsApp. <br /> На сообщения
          отвечаю максимально быстро. Если меня нет на месте или занята , то в
          любом случае, стараюсь дать ответ в течении суток.
        </p>
          <motion.ul
          initial="hidden"
          whileInView="visible"
          className="contact__connections"
          >
            <motion.li custom={1}
            
            variants={iconsAnimation}
            
          className="contact__connections-item">
              <a
                href="https://wa.me/+996709603067"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="contact__connections-icon" />
              </a>Whatsapp
            </motion.li>
            <motion.li custom={2}
            
            variants={iconsAnimation}
            
          className="contact__connections-item">
              <a
                href="mailto:maksatbek.saiitbek.on@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail className="contact__connections-icon" />
              </a>
              Почта
            </motion.li>
            <motion.li custom={3}
            
            variants={iconsAnimation}
            
          className="contact__connections-item">
              <a
                href="https://discord.com/channels/@me/#4110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="contact__connections-icon" />
                
              </a>
              Discord
            </motion.li>
            <motion.li custom={4}
            
            variants={iconsAnimation}
            
          className="contact__connections-item">
              <a
                href="https://t.me/MaksatbekSaiitbekuulu"
                target="_blank"
                rel="noopener noreferrer "
              >
                <FaTelegram className="contact__connections-icon" />
              </a>Telegram
            </motion.li>
          </motion.ul>
      </div>
    </section>
  );
}

export default Contact;
