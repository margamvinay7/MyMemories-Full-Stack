import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { Container } from '@mui/material'
import PostDetails from './components/PostDetails/PostDetails'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag'



import './App.css';
const user=JSON.parse(localStorage.getItem('profile'))
function App() {
  return (
    <Container maxWidth="xl">
    <Routes>

      <Route path="/" element={<Navigate replace to="/posts"/>} />
      <Route path="/posts" element={<Home/>} />
      <Route path="/posts/search" element={<Home/>} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path={['/creators/:name','/tags/:name']} element={<Home/>} />
      <Route path="/auth" element={()=>(!user ? <Auth/> : <Navigate replace to="/posts"/>)} />
    </Routes>
    </Container>
  
  );
}

export default App;
