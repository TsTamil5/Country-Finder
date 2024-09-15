import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FastFinder from './components/FastFinder';
import ResultsPage from './components/ResultsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FastFinder />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
