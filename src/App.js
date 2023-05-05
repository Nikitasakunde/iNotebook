// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


 


const App =()=> {
  const pageSize = 5;
  // apiKey= process.env.REACT_APP_NEWS_API
  const apiKey= 'c1559d0e6c2b4b2d983bf5fb13d866f8'


  const [progress, setProgress] = useState(0)


    return (
        <Router>
          <div>
          <Navbar/>
          <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
          />
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
              <Route exact path="/business" element = {<News setProgress={setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>



            </Routes>
            </div>
        </Router>
    )

}
export default App;
