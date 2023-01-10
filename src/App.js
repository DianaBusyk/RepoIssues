import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/home';
import IssueDetails from './pages/issue-details';
import Users from './pages/users';
import About from './pages/about';
import Error from './pages/error';
// import components
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users/>} />
        <Route path='about' element={<About/>} />
        <Route path='issue/:id' element={<IssueDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
