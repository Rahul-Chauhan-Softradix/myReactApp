import React from 'react';
import './App.css';
import Form from './components/Form';
import Dropdown from './components/Dropdown';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contacts from './components/Contacts';
import Reducer from './components/Reducer';
import Error from './components/Error';
import Layout from './components/Layout';
import Home from './components/Home';
import Formik from './components/Formik';


function App() {
  const contacts = [
    {
        name: 'Rahul',
        age: 28,
    },
    {
      name:'Rajat',
      age:27
    },
    {
      name:'Kamal',
      age:29
    },
    {
      name:'Akshay',
      age:22
    }
    
]
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
      <Route path='/contacts' element={contacts.map(x => <Contacts info = {x} />)}/>
      <Route path='*' element = {<Error/>}/>
      <Route path='/register' element = {<Form/>}/>
      <Route path='/dropdown' element = {<Dropdown/>}/>
      <Route path='formik' element = {<Formik/>} />
     </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
