import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from "styled-components"
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Client from './pages/Client/Client'
import ProductsDetail from './pages/ProductsDetail/ProductsDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='/productsdetail' element={<ProductsDetail/>}/>
        </Route>
      </Routes>
    </div>
  )
}
const Container = styled.div`
    text-align: center;
`
const Headers= styled.div`
  background-color: red !important;
`
export default App
