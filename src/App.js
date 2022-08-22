import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Especialidades from './components/Especialidades'
import Quemsomos from './components/Quemsomos'
import Contato from './components/Contato'
import Profissionais from './components/Profissionais'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
  
        <BrowserRouter>
            <Nav/>
            <Home/>
            <Quemsomos/>
            <Especialidades/>
            <Profissionais/>
            <Contato/>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
      
  
  );
}

export default App;
