import React, { Component } from "react"
import Image from "./Image"

class Gallery extends Component {
  state = { photos: [] }

  componentDidMount() {
    // This is Flickr's test key. Change to your own one
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=86bac430e1df7d14e6ae2a0f661ed7dc&format=json&nojsoncallback=1&extras=1&per_page=10")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ photos: data.photos.photo }))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <div>Hello there</div>
        {this.state.photos.map(pic =>
          <Image key={pic.id} id={pic.id} farmId={pic.farm} serverId={pic.server} secret={pic.secret} />
        )}
      </div>
    )
  }
}

export default Gallery