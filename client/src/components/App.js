import React from 'react'
import NavBar from '../containers/NavBar'
import Footer from './Footer'
import BodyContainer from '../containers/BodyContainer'

import '../App.css'

const App = () => (
  <div className='App'>
    <NavBar />
    <BodyContainer />
    <Footer />
  </div>
)

export default App
