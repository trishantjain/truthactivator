import './App.css';
import React from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";

// 608b51382f3740f1a0804a421aa66ead -- API Key

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={7} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News key="bussiness" pageSize={7} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={7} country="in" category="entertainment" />} ></Route>
          <Route exact path="/health" element={<News key="health" pageSize={7} country="in" category="health" />} ></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={7} country="in" category="sports" />} ></Route>
          <Route exact path="/science" element={<News key="science" pageSize={7} country="in" category="science" />} ></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={7} country="in" category="technology" />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App