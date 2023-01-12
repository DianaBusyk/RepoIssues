import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/home/home';
import IssueDetails from './pages/issueDetails/issue-details';
import Users from './pages/users/users';
import About from './pages/about/about';
import Error from './pages/error/error';
// import components
import Header from './components/header/header';

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
