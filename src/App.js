import React, { Component } from "react";
import NavBar from "./components/Navbar";
// import './App.css';
import ImagesCard from "./components/Cards";
import imagesList from "./imagesList.json";

class App extends Component {
  state = {
    // Setting this.state.imagesList to the imagesList json array
    imagesList,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
      <NavBar />
      <div className="container-fluid">
      {this.state.imagesList.map(images => (
        <ImagesCard
         
          id={images.id}
          key={images.id}
          name={images.name}
          image={images.image}
        />
        ))}
      </div>
    </div>
    );
  }
}

export default App;
