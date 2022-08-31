import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { categories } from './data/data';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    const response = await axios.get('http://localhost:5000')
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/*' element={<MainPage categories={categories} items={data} />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
