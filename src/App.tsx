import './App.css'
import Navbar from './components/Navbar'
import ContactUsForm from './components/ContactUsForm'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function ScrollWatcher() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrolledVh = currentScrollPos / viewportHeight;

    if (scrolledVh < 1 && window.location.pathname !== '/') {
        navigate('/');
    } else if (scrolledVh >= 1 && scrolledVh < 2 && window.location.pathname !== '/section1') {
        navigate('/Services');
    } else if (scrolledVh >= 2) {
        navigate('/section2');
    }

  }
  
  useEffect(() => {
    console.log("TEST")
    window.addEventListener('scroll', handleScroll)
  })

  // useEffect(() => {
  //   console.log("MOUNT")
  //   return () => console.log("UNMOUNT")
  // }, [navigate]);

  return null
}


function App() {
  return (
    <BrowserRouter>
      <ScrollWatcher/>
      <div>
        <HomePage/>
        <ServicesPage/>
      </div>
    </BrowserRouter>
  )
}

export default App
