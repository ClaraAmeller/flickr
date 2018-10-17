import React from "react"

const Image = ({ imgId, src, userId }) =>
  <div>
    <a href={`https://www.flickr.com/photos/${userId}/${imgId}`}>
      <img src={src} alt="" />
    </a>
  </div>

const Card = ({ imgId, src, userId, username, caption }) => (
  <div>
    <Image imgId={imgId} src={src} userId={userId} />
    <div>
      <p>{username}</p>
      <p>{caption}</p>
    </div>
  </div>
);

export default Card;