import React from 'react';
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Order from './components/jsx/Order.jsx'
import Login from './components/jsx/Login.jsx'
import Product from './components/jsx/Product.jsx';
import Signup from './components/jsx/Sign up.jsx';
import Home from './components/jsx/Home.jsx';
import About from './components/jsx/About.jsx';
import Contact from './components/jsx/Contact.jsx';
import Submission from './components/jsx/Submission.jsx';
import Profile from './components/jsx/Profile';
function App() {
  return (
    <div className ="App">
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Sign up' element={<Signup />}/>
        <Route path='/Order' element={<Order />}/>
        <Route path='/Product' element={<Product />}/> 
        <Route path='/About' element={<About />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Contact'element={<Contact />}/>
        <Route path='/Submission'element={<Submission />} />
        <Route path='/Profile'element={<Profile />} />
        </Routes>
    </div>
  );
}
export default App;
