import React from 'react';
import './App.css';
import Header from './Header';
import { Routes , Route} from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Achievements from './Achievements';
import Research from './Research';
import Others from './Others';

function App() {
  return (
    <div className="App">
      <Header className="headerElement"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/research" element={<Research />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
}

export default App;
