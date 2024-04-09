import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={style.footerContainer}>
        <div className={style.container}>
          <div className={style.card}>
            <h3>About Us</h3>
            <p>Welcome to our website, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi illo atque itaque. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={style.card}>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Products/Services</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className={style.card}>
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media for the latest updates, news, and promotions:</p>
            <ul className={style.listItem}>
              <li>Facebook: musicNepal</li>
              <li>Twitter: @music_Nepal</li>
              <li>Instagram: @music_Nepal</li>
              <li>LinkedIn: music_Nepal</li>
            </ul>
          </div>
          <div className={style.card}>
            <h3>Contact Us</h3>
            <p>Have questions or feedback? Feel free to reach out to our dedicated support team:</p>
            <ul className={style.listItem}>
              <li>Email: nepalMusic@gmail.com</li>
              <li>Phone: +977-986746573</li>
              <li>Address: New Baneshwor Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>
        <div className={style.hrline}>
        </div>
        <div className={style.copyright} >
          <p>All content © 2023 Nepal_musics, All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
