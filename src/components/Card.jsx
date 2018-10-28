import React from "react"
import "../styles/Card.css"

const Image = ({ imgId, src, userId }) =>
  <div className="pic">
    <a href={`https://www.flickr.com/photos/${userId}/${imgId}`}>
      <img src={src} alt="" />
    </a>
  </div>

const Card = ({ imgId, src, userId, username, caption }) => (
  <div className="card">
    <Image imgId={imgId} src={src} userId={userId} />
    <div className="card-content">
      <div className="card-text">
        <h3 className="username">{username}</h3>
        <p className="caption">{caption}</p>
      </div>
    </div>
  </div>
);

export default Card;