import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss'
import Layout from './components/Layout'
import Contact from './components/Contact';
import About from './components/About';
import SideBar from './components/Sidebar';

function App() {
  return (
    
        <Router baseline="/portfolio">
        <Routes>
            <Route path="/" element={<Layout/>} /> 
            <Route path="/about/" element={<About/>} /> 
            <Route path="/contact/" element={<Contact/>} /> 
            </Routes>
        </Router>
    
  );
}

export default App;
