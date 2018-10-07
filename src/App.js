import React, { Component } from "react";
import Gallery from "./Gallery.jsx";
import { hot } from "react-hot-loader"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Flickr! </h1>
        <Gallery />
      </div>
    );
  }
}

export default hot(module)(App);