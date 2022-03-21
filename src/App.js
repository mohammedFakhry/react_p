import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import { Container } from 'react-bootstrap';
import SocialMedia from './components/social media/';
import Footer from './components/Footer/';
import Contact from './components/Contact';
import Index from './components/Index';
import Error from './components/Error';

import "swiper/css/bundle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return ( 
    isLoading? <Loading />:
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Container>
        <SocialMedia />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
