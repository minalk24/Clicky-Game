import React, { Component } from "react";
import NavBar from "./components/Navbar";
import ImagesCard from "./components/Cards";
import imagesList from "./imagesList.json";
// import './App.css';
let footerCss = {
  background : "#7da64c",
  color: "#fff ",
  height: "60px",
  bottom: "0"
};

class App extends Component {
  state = {
    // Setting this.state.imagesList to the imagesList json array
    imagesList,
    clickedImageIds: [],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    animation: "animated swing"
  }

  // handleCardClicked = (id) => {
  //   console.log(id);
  //   // create a new array that is a clone of the imagesList array
  //   // loop over the new array and check if the id for each is equal to the clicked id 
  //   // if it is check is the clicked value is true or false
  //   // if its false update it to true and add 1 to score
  //   // check if score is greater than toScore 
  //   // if sore is greater update topScore to be score
  //   // set state with new array where imagesList was
  //   let newImageList = this.state.imagesList;
  //   newImageList.forEach(element => {
  //   });
  // }

  handleClickPicture = (id) => {
    let shuffledArray = this.handleShuffleArray(imagesList);
    this.setState({ imagesList: shuffledArray });

    if (this.state.clickedImageIds.includes(id)) {
      console.log('Game Over reset values ')
      this.setState({ clickedImageIds: [], score: 0, message: 'You guessed incorrectly! ' });
      return;

    } else {
      this.setState({
        clickedImageIds: this.state.clickedImageIds.concat([id]),
        score: this.state.score + 1,
        message: 'You guessed it correctly'
      });
      console.log("Score", this.state.score);
      console.log("TopScore", this.state.topScore);

      if (this.state.score + 1 === 12) {
        // Shuffle Array
        this.handleShuffleArray(imagesList);
        this.setState({ imagesList: shuffledArray });

        //Reset Game
        this.setState({
          topScore: this.state.score + 1,
          message: 'Congratulations!! You won click image to reset the game',
          //Reset the Game 
          score: 0,
          clickedImageIds: [],
        })

      }
      else if (this.state.score + 1 > this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
    }
  }

  handleShuffleArray = imagesList => {
    for (let i = imagesList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imagesList[i], imagesList[j]] = [imagesList[j], imagesList[i]];
    }
    return imagesList;
  }


  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message} />

        <div className="container-fluid">
          {this.state.imagesList.map(images => (
            <ImagesCard
              id={images.id}
              key={images.id}
              name={images.name}
              image={images.image}
              clickPicture={this.handleClickPicture}
              animate={!this.state.score && this.state.topScore}
            />
          ))}
        </div>

        <footer className = "fixed-bottom" style = {footerCss}>
          <center className="p-3">
            <a href="https://github.com/minalk24/Clicky-Game" className="text-light" target="_blank" >Click for code </a>
          </center>
        </footer>

      </div>
    );
  }
}

export default App;
