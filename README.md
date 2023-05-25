# **인터렉티브 웹 사이트**
- Demo : 
## **개발 목표**
애니메이션과 캔버스, Three.js 등을 활용하여 보다 동적이고 인터렉티브한 웹사이트를 구축
## ***Parellax Scrolling***
![Parellax-Scrolling](/public/ps.png)
### - 사용 기술
- CSS
- Javascript
- React
### - Advanced Feature
- 스크롤의 위치를 받고 그 위치에 따라 SVG요소 별로 이동 값을 다르게 해 공간감을 부여
- 반응형 웹 사이트를 구축하여 모바일 환경에서는 기기의 성능을 고려하여 애니메이션이 움직이지 않게 구현
```javascript
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
      } 
    ...
})
```
### - 개선 사항
- 이미 만들어진 svg 파일을 활용했지만 다음에는 직접 svg파일을 만들고 나만의 애니메이션을 만들어 볼 것
## ***404 페이지***
![404page](/public/404.png)
### - 사용 기술
- CSS
- React
- CSSTransition
### - Advanced Feature
- SVG를 활용하여 각각의 요소 별로 애니메이션을 부여
- CSSTransition를 활용하여 리액트 생명주기 안에서 애니메이션을 만들어 보다 자연스러운 움직임을 구현
```javascript
          <CSSTransition
            in={isBeamAnim}
            timeout={2000}
            classNames="animation-2"
            onEntered={handleBeamAnimEnd}
            onExited={handleBeamAnimStart}
          >
            <path d="M1143.5 ..." fill="#9670BA" />
          </CSSTransition>
          <path id="4-L"
            d="M1009.41 922.58L993.14 ..."
            fill="white" />
          <CSSTransition
            in={isAnimating}
            timeout={2000}
            classNames="animation-1"
            onEntered={handleAnimationEnd}
            onExited={handleAnimationStart}
          >
            <path fill='white' d="M1250.25 878 ..."/>
          </CSSTransition>
```
### - 개선 사항
- 이미 만들어진 svg 파일을 활용했지만 다음에는 직접 svg파일을 만들고 나만의 애니메이션을 만들어 볼 예정