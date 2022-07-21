import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../Component/Banner'
import Box from '../../Component/box'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'

type Props = {}

const Client = (props: Props) => {
  return (
    <div className='Container'>
        <Header>
        </Header>
        
        <Outlet/>
        <Footer>
        </Footer>
    </div>
  )
}

export default Client