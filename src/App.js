//import logo from './logo.svg';
import './App.css';
import kelibia from './image/kelibia.jpg'
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Most beautiful countries in Tunisia</h1>
    <br />
    <div className="images">
      <h2>Kelibia:</h2>
      <br/>
    <img className="img"src={kelibia} alt="kelibia" />
    <br />
    <h2>El hawaria:</h2>
    <br/>
    <img className="img" src="/hawaria.jpg" alt="hawaria" />
    </div>
  </div>
 
  <video className='videodiv' width="320" height="240" controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  </React.Fragment>
  );
}

export default App;
