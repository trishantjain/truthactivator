import './App.css';
import React from 'react'
import News from './components/News';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";

// 608b51382f3740f1a0804a421aa66ead -- API Key

function App() {

  const [mode, setMode] = useState('light')


  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/general" element={<News mode={mode}  key="general" pageSize={7} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News mode={mode} key="bussiness" pageSize={7} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News mode={mode} key="entertainment" pageSize={7} country="in" category="entertainment" />} ></Route>
          <Route exact path="/health" element={<News mode={mode} key="health" pageSize={7} country="in" category="health" />} ></Route>
          <Route exact path="/sports" element={<News mode={mode} key="sports" pageSize={7} country="in" category="sports" />} ></Route>
          <Route exact path="/science" element={<News mode={mode} key="science" pageSize={7} country="in" category="science" />} ></Route>
          <Route exact path="/technology" element={<News mode={mode} key="technology" pageSize={7} country="in" category="technology" />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App