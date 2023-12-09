import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li><Link to='/scrolling'>Parellax</Link></li>
        <li><Link to='/interact'>Interact</Link></li>
        <li><Link to='/404'>Found</Link></li>
      </ul>
    </div>
  );
}

export default Home;