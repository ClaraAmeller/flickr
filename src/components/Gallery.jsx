import React, { Component } from "react";
import Card from "./Card";
import api from "../api/search";

class Gallery extends Component {
  state = { photos: [] }

  componentDidMount() {
    const api_key = "86bac430e1df7d14e6ae2a0f661ed7dc"; // This is Flickr's test key, change to your own one
    this.fetchPosts(api_key, "cat", 12, ["description", "date_upload", "owner_name", "geo", "tags", "views", "url_m"]);
  }

  fetchPosts = async (api_key, tags, perPage, extras) => {
    api(api_key, tags, perPage, extras)
      .then(data => this.setState({ photos: data }))
      .catch(error => console.log("Error: ", error));
  }

  render() {
    return (
      <div className="container">
        {this.state.photos.map(pic =>
          <Card key={pic.id} imgId={pic.id} src={pic.url_m} userId={pic.owner} username={pic.ownername} caption={pic.description._content} />
        )}
      </div>
    )
  }
}

export default Gallery;