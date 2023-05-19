import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../style/Scrolling.module.css';
import { Link } from 'react-router-dom';

function Scrolling() {
  // 1. 유저가 스크롤 했음을 알아냄
  // 2. 얼마나 스크롤 됐는지 알아냄
  // 3. 이를 가지고 이미지별 스크롤 강도를 조정
  return(
    <>
      <header className={styles.header}>
        <Link to='/scrolling' className={styles.button_in_header}>THE MOUNTAIN</Link>
        <ul className={styles.right_btns}>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`}>MOUNTAIN</Link></li>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`}>AMAZING BLOG</Link></li>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`}>AMAZING NEWS</Link></li>
        </ul>
      </header>
      <div>
        <img src='/img.svg' alt='background'/>
      </div>
    </>
  )
}

export default Scrolling;
