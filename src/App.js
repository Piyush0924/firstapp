// App.js
import React from 'react';
import NavbarComponent from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Helps from './pages/Helps';
import Contactus from './pages/Contactus';
import Products from './pages/Products';
import Home from './components/homepage';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import Todolist from './pages/Todolist';

function App() {


  // const name ="Piyush";
  return (
    <div className='app' >
      <NavbarComponent/>
<Routes>
   <Route path="/" element={<Home />}/>
   /path="/" for default indexed page
   <Route path="Signup" element={<Signup />}/>
   <Route path="Todolist" element={<Todolist />}/>
   
    <Route path="Helps" element={<Helps />}/>
    <Route path="Contactus" element={<Contactus />}/>
    <Route path="Products/:itemsId" element={<Products />}/>

    /line when u type the wrong url
    <Route path="*" element={<PageNotFound />}/>

{/*nested part how the deatils are having the sub section for the betterfunctioning <Route path="Details"/>
<Route path="Helps" element={<Helps />}/>
    <Route path="Contactus" element={<Contactus />}/>
    <Route path="Products/:itemsId" element={<Products />}/>*/}
</Routes> 


      

 </div>
    );
}

export default App;

