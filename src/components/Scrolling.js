import React, { useState } from 'react';
import styles from '../style/Scrolling.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as BG } from '../img/img.svg';
import $ from 'jquery';

function Scrolling() {
  // 1. 유저가 스크롤 했음을 알아냄
  // 2. 얼마나 스크롤 됐는지 알아냄
  // 3. 이를 가지고 이미지별 스크롤 강도를 조정

  $(window).on('scroll', () => {
    if(document.documentElement.clientWidth > 800){
      // 해
      $($('circle.st1')[0]).css('transform', `translateY(${window.scrollY * 1.3}px)`)

      // 회색 구름
      $($('path.st2')[0]).css('transform', `translateX(${window.scrollY * 2.25}px)`)
      $($('path.st2')[1]).css('transform', `translateX(${window.scrollY * -1.25}px)`)

      // 흰색 구름
      $($('path.st1')[0]).css('transform', `translateX(${window.scrollY * 2.5}px)`)
      $($('path.st1')[2]).css('transform', `translateX(${window.scrollY * -1.5}px)`)
      $($('path.st1')[1]).css('transform', `translateX(${window.scrollY * -0.5}px)`)

      // 새
      $($('path.st8')[0]).css('transform', `translateX(${window.scrollY * -2.5}px)`)
      $($('path.st8')[1]).css('transform', `translateX(${window.scrollY * 1.5}px)`)
      $($('path.st8')[2]).css('transform', `translateX(${window.scrollY * 0.5}px)`)

      // 산
      $($('path.st4')[0]).css('transform', `translateY(${window.scrollY * 0.95}px)`)

      $($('path.st6')[0]).css('transform', `translateY(${window.scrollY * 0.8}px)`)
      $($('path.st6')[1]).css('transform', `translateY(${window.scrollY * 0.8}px)`)
      $($('path.st5')[0]).css('transform', `translateY(${window.scrollY * 0.8}px)`)

      $($('path.st7')[0]).css('transform', `translateY(${window.scrollY * 0.65}px)`)

      $($('path.st9')[0]).css('transform', `translateY(${window.scrollY * 0.5}px)`)
      $($('path.st9')[1]).css('transform', `translateY(${window.scrollY * 0.5}px)`)
      $($('path.st9')[2]).css('transform', `translateY(${window.scrollY * 0.5}px)`)
      $($('path.st3')).css('transform', `translateY(${window.scrollY * 0.5}px)`)

      $($('path.st10')).css('transform', `translateY(${window.scrollY * 0.35}px)`)

      $($('path.st11')).css('transform', `translateY(${window.scrollY * 0.2}px)`)
      $($('path.st12')).css('transform', `translateY(${window.scrollY * 0.2}px)`)
      $($('path.st13')).css('transform', `translateY(${window.scrollY * 0.2}px)`)

      $($('path.st15')).css('transform', `translateY(${window.scrollY * 0.05}px)`)
      $($('path.st16')).css('transform', `translateY(${window.scrollY * 0.05}px)`)
    } 
  })

  $(window).on("resize", () => {
    if(document.documentElement.clientWidth <= 800){
            // 해
            $($('circle.st1')[0]).css('transform', `translateY(0px)`)

            // 회색 구름
            $($('path.st2')[0]).css('transform', `translateX(0px)`)
            $($('path.st2')[1]).css('transform', `translateX(0px)`)
      
            // 흰색 구름
            $($('path.st1')[0]).css('transform', `translateX(0px)`)
            $($('path.st1')[2]).css('transform', `translateX(0px)`)
            $($('path.st1')[1]).css('transform', `translateX(0px)`)
      
            // 새
            $($('path.st8')[0]).css('transform', `translateX(0px)`)
            $($('path.st8')[1]).css('transform', `translateX(0px)`)
            $($('path.st8')[2]).css('transform', `translateX(0px)`)
      
            // 산
            $($('path.st4')[0]).css('transform', `translateY(0px)`)
      
            $($('path.st6')[0]).css('transform', `translateY(0px)`)
            $($('path.st6')[1]).css('transform', `translateY(0px)`)
            $($('path.st5')[0]).css('transform', `translateY(0px)`)
      
            $($('path.st7')[0]).css('transform', `translateY(0px)`)
      
            $($('path.st9')[0]).css('transform', `translateY(0px)`)
            $($('path.st9')[1]).css('transform', `translateY(0px)`)
            $($('path.st9')[2]).css('transform', `translateY(0px)`)
            $($('path.st3')).css('transform', `translateY(0px)`)
      
            $($('path.st10')).css('transform', `translateY(0px)`)
      
            $($('path.st11')).css('transform', `translateY(0px)`)
            $($('path.st12')).css('transform', `translateY(0px)`)
            $($('path.st13')).css('transform', `translateY(0px)`)
      
            $($('path.st15')).css('transform', `translateY(0px)`)
            $($('path.st16')).css('transform', `translateY(0px)`)
    }
    console.log($(`.${styles.main_img}`).css('width', '100vw'))
  })

  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.button_in_header}>
          <Link to='/' className={styles.button_in_header}>HOME</Link>
        </div>
        <ul className={styles.right_btns}>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`} onClick={()=>document.querySelector("#document").scrollIntoView()}>MOUNTAIN</Link></li>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`}>AMAZING BLOG</Link></li>
          <li><Link to='/scrolling' className={`${styles.button_in_header}`}>AMAZING NEWS</Link></li>
        </ul>
      </header>
      <div className={styles.bg_wrapper}>
        <BG className={styles.main_img}/>
      </div>
      <div className={styles.main_content}>
        <p id='document' className={styles.document_title}>UNAVAILABLE</p>
        <ul className={styles.document_wrapper}>
          <li className={styles.document_list}>WINDOW / MAC</li>
          <li className={styles.document_list}>NINTENDO SWITCH</li>
          <li className={styles.document_list}>PLAY STATION 4 / 5</li>
          <li className={styles.document_list}>XBOX</li>
        </ul>
      </div>
    </div>
  )
}

export default Scrolling;
