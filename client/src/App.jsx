import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/query/Home';
import Addquery from './pages/query/Addquery';
import About from './pages/query/About';
import Yourqueries from './pages/query/Yourquery';
import Contact from './pages/query/Contact';
import Login from './pages/authpages/Login';
import Register from './pages/authpages/Register';
import { Toaster } from 'react-hot-toast';
import './App.css';
import AnswerQuery from './pages/query/AnswerQuery';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './Context/auth';
import Logout from './Context/Logout';
const App = () => {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
  {/*----------------Protected Routes------------------------ */}
     <Route element={<ProtectedRoute/>}>
      <Route path ="/contact" element={<Contact/>} />
      <Route path="/ask-query" element={<Addquery/>} />
      <Route path= "/your-query" element={<Yourqueries/>}/>
      <Route path ="/polls/:id" element={<AnswerQuery/>}/>
      </Route>
   {/*--------------------------------------------------------  */}
      <Route path="logout" element={<Logout/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
     
    </Routes>
    </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App
