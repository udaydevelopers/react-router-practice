import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
//import About from './components/About';

import {Navbar} from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import NoMatch from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import Profile from './components/Profile';
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<React.Suspense fallback="Loading..." ><LazyAbout/></React.Suspense>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='profile' element={<Profile/>}/>
        <Route path= '*' element={<NoMatch/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
