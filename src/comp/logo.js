import logo from '../earth.png'
import Header from './Header.js'

// import { BrowserRouter , Router, Route, Switch } from "react-router-dom";

function Logo2() {
  return (
    
    <div className="logo">
      
     
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <div class="container">
           <div class="title"> <h1>  Alex Talberg / <a href='/about_me'> About Me</a>|   <a href="/projects">Projects</a>   |   <a href="/contact">Contact Me</a></h1>
            </div></div>
          </header>
   
 
    </div>
  );
}

export default Logo2;
