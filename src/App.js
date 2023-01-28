import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss'
import Layout from './components/Layout'

 
function App() {
  return (
    <Routes>  
    <Route path="/" element={<Layout/>} /> 
  </Routes>
  );
}

export default App;
