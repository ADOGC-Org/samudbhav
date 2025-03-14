import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
// import AboutUs from './pages/AboutUs';
import ChapterComingSoon from './pages/ChapterComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path="/chapter/:id" element={<ChapterComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to Samudbhav.
//         </p>
//         <p>

//           We are coming Soon !!!
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a> */}
//       </header>
//     </div>
//   );
// }


// export default App;
