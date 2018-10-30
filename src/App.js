import React from "react";
import Gallery from "./components/Gallery";
import { hot } from "react-hot-loader";
import "./styles/App.css";

const App = () =>
  <div className="App">
    <h1> Hello, Flickr! </h1>
    <Gallery />
  </div>

export default hot(module)(App);