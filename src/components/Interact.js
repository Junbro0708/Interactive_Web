import { useEffect, useState, useRef } from 'react';
import React from 'react';
import styles from '../style/Interact.module.css';
import $ from 'jquery';
import { isCompositeComponent } from 'react-dom/test-utils';

function Interact() {
  const scrollStart = 373
  const scrollEnd = 1585
  const changeGap = 60

  const fixedTextAppearing = 3470
  const fixedTextDisappearing = 3800

  const [lists, setLists] = useState([])
  const videoRef = useRef(null)

  const [currentImage, setCurrentImage] = useState(0)

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

    if(window.scrollY + document.documentElement.clientHeight > $('#santa').offset().top && window.scrollY + document.documentElement.clientHeight < $('#santa').offset().top + $('#santa').height() + 150){
      const translateX = 90 - 80 * 1.8 * (window.scrollY + document.documentElement.clientHeight - $('#santa').offset().top) / ($('#santa').height() + 100)
      const translateY = -13 + 13 * 1.5 * (window.scrollY + document.documentElement.clientHeight - $('#santa').offset().top) / ($('#santa').height() + 100)
      const rotationDegree = 23 - 23 * 1.7 * (window.scrollY + document.documentElement.clientHeight - $('#santa').offset().top) / ($('#santa').height() + 100)
      $('#santa').css("transform", `translate(${translateX}px, ${translateY}px) rotate(${rotationDegree}deg)`)
    }

    centerElement('fixed_wrapper', $('video'))

    if(window.scrollY > $('#video_section').offset().top + $('#video_section').height() - ($('#fixed_wrapper').height() + (document.documentElement.clientHeight - $('#fixed_wrapper').height()) / 2)){
      $('#fixed_wrapper').css('position', 'relative')
      $('#fixed_wrapper').css('top', 'initial')
      $('#fixed_wrapper').css('left', 'initial')
      $('#fixed_wrapper').css('transform', `translateY(${$('#video_section').height() - $('#fixed_wrapper').height()}px)`)
    }

    if(window.scrollY > fixedTextAppearing && window.scrollY < fixedTextDisappearing){
      $('#fixed_description').css('transform', `translateY(${fixedTextDisappearing - window.scrollY}px)`)
      $('#fixed_description').css('opacity', `${(window.scrollY - fixedTextAppearing) / (300)}`)
    }else if(window.scrollY > fixedTextDisappearing){
      $('#fixed_description').css('transform', `translateY(0px)`)
      $('#fixed_description').css('opacity', `1`)
    }else{
      $('#fixed_description').css('transform', `translateY(100px)`)
      $('#fixed_description').css('opacity', `0`)
    }
  })

  $("#video").on('loadedmetadata', () => {
    $('#video_section').css('height', ($("#video")[0].duration * 500) + 'px')
  })

  $('#slider_content_wrapper').on('scroll', () => {
    const imageWidth = $($(`.slider_img`)[0]).width()
    
    setCurrentImage(Math.round($('#slider_content_wrapper').scrollLeft() / imageWidth))
  })

  $('#left_btn').on('click', () => {
    handleSlideChange(-1)
  })

  $('#right_btn').on('click', () => {
    handleSlideChange(1)
  })

  const handleSlideChange = (step) => {
    setCurrentImage(currentImage+step)

    $('#slider_content_wrapper').scrollLeft($($(`.slider_img`)[currentImage]).offset().left)
  }

  const centerElement = (elementId, video) => {
    const element = $(`#${elementId}`)
    const parent = $(element.parent())

    if(window.scrollY > parent.offset().top - (document.documentElement.clientHeight - element.height()) / 2){
      element.css('position', 'fixed')
      element.css('top', '50%')
      element.css('left', '50%')
      element.css('transform', 'translate(-50%, -50%)')

      if(video) videoRef.current.currentTime = (window.scrollY - $('#video_section').offset().top) / 500
    }else{
      element.css('position', 'relative')
      element.css('top', 'initial')
      element.css('left', 'initial')
      element.css('transform', 'initial')
    }
  }
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
        <li><aside></aside>저의 이름은 박준형</li>
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
        <li><aside></aside>캐나다 유학</li>
        <li><aside></aside>탬우드 컬리지</li>
        <li><aside></aside>웹 개발 전공</li>
        <li><aside></aside>캐나다 기업</li>
        <li><aside></aside>6개월 인턴십</li>
        <li><aside></aside>학위 수여</li>
        <li><aside></aside>프론트 엔드</li>
        <li><aside></aside>백 엔드</li>
        <li><aside></aside>풀스택</li>
      </ul>
      <div>
        <section className={styles.panel1_img}>
          <img id='santa' className={styles.santa_img} src='img/santa_flying.png'/>
        </section>
        <section id='video_section' className={styles.video_section}>
          <div id='fixed_wrapper' className={styles.fixed_wrapper}>
            <video ref={videoRef} id='video' className={styles.video} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" muted loop></video>
            <div id='fixed_description' className={styles.fixed_description}>
              <div>혁신이 만든</div>
              <div>압도적인 성장</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Interact;