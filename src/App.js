import React, { Component } from "react";
import NavBar from "./components/Navbar";
// import './App.css';
import ImagesCard from "./components/Cards";
import imagesCharacters from "./imagesList.json";

class App extends Component {
  state = {
    // Setting this.state.imagesList to the imagesList json array
    imagesCharacters,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <ImagesCard
          // key={imagesCharacters.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
