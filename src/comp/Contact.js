import logo from '../earth.png'

// import { BrowserRouter , Router, Route, Switch } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
          <div class="title"> <h1>  Alex Talberg / <a href='/about_me'> About Me</a>|   <a href="/projects">Projects</a>   |   <a href="/contact">Contact Me</a></h1>
          </div>

          <div> <iframe title='contactForm' src="https://survey.alchemer.com/s3/6743631/website-survey" frameborder="0" width="100%" height="1000" ></iframe></div>
        </div>
      </header>


    </div>
  );
}

export default Contact;
