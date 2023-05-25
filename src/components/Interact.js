import { useEffect, useState } from 'react';
import React from 'react';
import styles from '../style/Interact.module.css';
import $ from 'jquery';

function Interact() {
  const scrollStart = 373
  const scrollEnd = 1585
  const changeGap = 60

  const [lists, setLists] = useState([])

  useEffect(() => {
    setLists($(`li`));
  }, [])
  $(window).on('scroll', () => {
    if(window.scrollY > scrollStart && window.screenY < scrollEnd){
      if(parseInt((window.scrollY - scrollStart) / changeGap) >= 0 && parseInt((window.scrollY - scrollStart) / changeGap) < lists.length){
        $(lists[parseInt((window.scrollY - scrollStart) / changeGap)]).css("color", "white");
        $($(lists[parseInt((window.scrollY - scrollStart) / changeGap)]).find('aside')[0]).css("background-image", 'url("/img/light_house.png")')

        $(lists[parseInt((window.scrollY - scrollStart) / changeGap)-1]).css("color", "black");
        $($(lists[parseInt((window.scrollY - scrollStart) / changeGap)-1]).find('aside')[0]).css("background-image", 'url("/img/dark_house.png")')

        $(lists[parseInt((window.scrollY - scrollStart) / changeGap)+1]).css("color", "black");
        $($(lists[parseInt((window.scrollY - scrollStart) / changeGap)+1]).find('aside')[0]).css("background-image", 'url("/img/dark_house.png")')
      }
    }

    if(window.scrollY + document.documentElement.clientHeight > $('#santa').offset().top && window.scrollY + document.documentElement.clientHeight < $('#santa').offset().top + $('#santa').height() + 100){
      const translateX = 80 - 80 * (window.scrollY + document.documentElement.clientHeight - $('#santa').offset().top)
      console.log(translateX)
      $('#sante').css("right", `${translateX}px`);
    }
  })
  return (
    <main className={styles.bg}>
      <div className={styles.main_img_wrapper}>
        <img width={320} src='img/computer.png' alt='computer'/>
      </div>
      <div className={styles.intro_main}>
        <p>안녕하세요 : &#41;</p>
        <p>저를 소개하겠습니다!</p>
        <p className={styles.join}>Join us!</p>
        <img className={styles.arrow} src='img/down-arrow.png'/>
      </div>
      <ul className={styles.text_list}>
        <li><aside></aside>이름은 박준형</li>
        <li><aside></aside>대한민국 출생</li>
        <li><aside></aside>나이 25세</li>
        <li><aside></aside>경기도 용인 출신</li>
        <li><aside></aside>숭실대학교</li>
        <li><aside></aside>글로벌미디어학부</li>
        <li><aside></aside>학생회 기획국장</li>
        <li><aside></aside>대학생 자유학기제</li>
        <li><aside></aside>교육부 장관상</li>
        <li><aside></aside>육군 만기 전역</li>
        <li><aside></aside>국제 학생회</li>
        <li><aside></aside>홍보부 팀장</li>
        <li><aside></aside>졸업 후 캐나다 유학</li>
        <li><aside></aside>탬우드 컬리지</li>
        <li><aside></aside>웹 개발 전공</li>
        <li><aside></aside>캐나다 기업</li>
        <li><aside></aside>6개월 인턴십</li>
        <li><aside></aside>프론트 엔드</li>
        <li><aside></aside>백 엔드</li>
        <li><aside></aside>풀스택 개발자</li>
      </ul>
      <div>
        <section className={styles.panel1_img}>
          <img id='santa' className={styles.santa_img} src='img/santa_flying.png'/>
        </section>
      </div>
    </main>
  );
}

export default Interact;