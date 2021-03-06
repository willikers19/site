import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import '../index.css';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <main>
        <div id="intro">
          <h2>William Kim</h2>
          <ul>
            <li>Recent Graduate from NYU</li>
            <li>Looking for a job in web development</li>
          </ul>
        </div>

        <div className="content" id="about">
          What I want:
          <ul>
            <li>To hone my front end skills.</li>
            <li>To learn about UX design.</li>
            <li>To make my creations intuitive and simple to use.</li>
          </ul>

          What You Want:
          <ul>
            <li>Someone with a strong CS background.</li>
            <li>Someone with a foundation in web development.</li>
            <li>Someone versatile who can tackle many problems</li>
          </ul>

          What I've done:
          <ul>
            <li>Java to C++ Translator</li>
            <li>Vidi Web App</li>
            <li>Breaking Website</li>
            <li>Hearthstone Design Plan</li>
          </ul>

          Contact Me:
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </main>
    )
  }
}

export default Home;
