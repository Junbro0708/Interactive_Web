import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../style/Content.css';

function Content() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };
  console.log(isAnimating)
  return (
    <div>
      <button onClick={handleClick}>Toggle Animation</button>
      <CSSTransition
        in={isAnimating}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="box">Animated Content</div>
      </CSSTransition>
    </div>
  );
}

export default Content;
