import React from 'react'
import Navbar from '../Navbar'
import Body from './Body'
import Products from './Product'

function Home() {
  return (
    <div>
       <Navbar />
       <div><Products /></div>
       <div>footer</div>
    </div>
  )
}

export default Home