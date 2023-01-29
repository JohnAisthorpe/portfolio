import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss'
import Layout from './components/Layout'
import Contact from './components/Contact';
import About from './components/About';

 
function App() {
  return (
    <Routes>  
    <Route path="/portfolio/" element={<Layout/>} /> 
    <Route path="/portfolio/about/" element={<About/>} /> 
    <Route path="/portfolio/contact/" element={<Contact/>} /> 
  </Routes>
  );
}

export default App;
