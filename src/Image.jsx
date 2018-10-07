import React from "react"

const Image = ({ id, farmId, serverId, secret }) =>
  <div>
    <img src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" />
  </div>

export default Image;