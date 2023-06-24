import React from "react";
import { PropTypes } from "prop-types";

const DefaultVideo = ({ embedId }) => (
  // <div className="video">
    <iframe 
      width="853"
      height='480'
      src={`https://www.youtube.com/embed/${embedId}`}
      framaBorder='0'
      allow="accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="defaultVideo"
    />
  // </div>
)
DefaultVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default DefaultVideo;