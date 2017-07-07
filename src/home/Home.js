import React, { Component } from 'react';
import Header from '../header/Header';
import App from '../app/App';
import About from '../about/About';
import Learn from '../learn/Learn';
import Contribute from '../contribute/Contribute';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

function Main(props) {
  return (
    <main>
      <App />
      <About />
      <Learn />
      <Contribute />
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      <a href="https://twitter.com/NickOnTheWeb">Twitter</a>
      |
      <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>
    </footer>
  );
}

export default Home;
