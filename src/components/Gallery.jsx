import React, { Component } from "react";
import Card from "./Card";
import api from "../api/search";

class Gallery extends Component {
  state = { photos: [] }

  componentDidMount() {
    const apiKey = "86bac430e1df7d14e6ae2a0f661ed7dc"; // This is Flickr's test key, change to your own one
    this.fetchPosts(apiKey, "sea", 12, ["description", "owner_name", "url_m"]);
  }

  fetchPosts = async (apiKey, tags, perPage, extras) => {
    api(apiKey, tags, perPage, extras)
      .then(data => this.setState({ photos: data }))
      .catch(error => console.log("Error:", error));
  }

  render() {
    return (
      <div className="container">
        {this.state.photos.map(({ id, url_m, owner, ownername, description: { _content: content } }) => (
          <Card key={id} imgId={id} src={url_m} userId={owner} username={ownername} caption={content} />
        ))}
      </div>
    )
  }
}

export default Gallery;