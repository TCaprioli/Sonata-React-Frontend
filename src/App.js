 import React from 'react'
 import './App.css'
 import AppCon from './containers/Appcon'


 class App extends React.Component{

   render(){
     return(
       <div className='App'>
        <nav className='navbar fixed-top navbar-expand-lg'>
          <div className="mx-auto">
            <span id='app-title'>Sonata</span>
          </div>
        </nav>

        <div className="min-vh-100">
      <AppCon/>
      </div>



        <nav className='navbar fixed-bottom'>
          <p id='footer-note'>Site by Tyler Caprioli and Lori Boyd</p>
        </nav>
       </div>
     )
   }
 }

 export default App