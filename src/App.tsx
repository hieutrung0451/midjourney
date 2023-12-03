import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Shorts from './pages/Shorts/Shorts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/shorts' element={<Shorts />} />
    </Routes>
  );
}

export default App;
