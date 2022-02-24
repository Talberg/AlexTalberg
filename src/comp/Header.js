import logo from '../earth.png'

// import { BrowserRouter , Router, Route, Switch } from "react-router-dom";

function EarthLinks() {
  return (
    <div className="logo">
      
     
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <div class="container">
            <div class='title'>
               <div class="title"> <h1>  Alex Talberg | <a href='/about_me'> About Me</a>   |   <a href="/contact">Contact Me</a></h1>
            </div>
            <h1>  About me </h1></div>
            </div>
          </header>
   
 
    </div>
  );
}

export default EarthLinks;
