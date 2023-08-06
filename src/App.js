import React from 'react'
import './App.css'
import {Footer,Blog,Possiblity,Features,Header, Whatgpt3} from './containers'
import {Cta,Brand,Navbar,Feature} from './components'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        < Navbar/>
        < Header/>
        < Brand/>
        < Whatgpt3/>
        < Features/>
        < Possiblity/>
        < Cta/>
        < Blog/>
        < Footer/>
        <Feature/>


      </div>
        
    </div>
  )
}

export default App