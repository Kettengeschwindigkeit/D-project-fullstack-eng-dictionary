import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { categories } from './data/data';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { RegisterPage } from './pages/RegisterPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

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
        <Route path='/*' element={<MainPage categories={categories} data={data} />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
