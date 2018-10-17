import React, { Component } from "react"
import Card from "./Card"

class Gallery extends Component {
  state = { photos: [] }

  componentDidMount() {
    // This is Flickr's test key. Change to your own one
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=86bac430e1df7d14e6ae2a0f661ed7dc&format=json&nojsoncallback=1&tags=cat&extras=description,date_upload,owner_name,geo,tags,views,url_m&per_page=10")
      .then(response => response.json())
      .then(data => this.setState({ photos: data.photos.photo }))
      .catch(error => console.error('Error:', error));
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

export default Gallery