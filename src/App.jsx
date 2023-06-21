import {  useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeslice'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import pageNotFound from './Pages/404/pageNotFound'
import Details from './Pages/details/Details'
import Explore from './Pages/explore/Explore'
import Home from './Pages/home/Home'
import searchResult from './Pages/searchResult/searchResult'


function App() {
  const dispatch = useDispatch();
 
  useEffect(()=>{
    fetchApiConfig()
  
    
   
    
  }, [])

  const fetchApiConfig=()=>{
    fetchDataFromApi("/configuration").then((res)=>{
      console.log(res)
      const url ={
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    })
  }

  return(
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/:mediaType/:id' element={<Details/>}/> 
      <Route path='/search/:query' element={<searchResult/>}/> 
      <Route path='/explore/:mediaType' element={<Explore/>}/> 
      <Route path='*' element={<pageNotFound/>}/> 
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
    
}

export default App
