import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Scrolling from './components/Scrolling';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/scrolling' element={<Scrolling/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
