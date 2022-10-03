import React from "react";
import * as Icons from "react-icons/fi";

function RecentPlayed({
  isPlaying = false,
  isFavourite = false,
  thumbnail,
  name,
  artists,
  genre,
  time,
}) {
  return (
    <div
      className={`recent-container hover-effect ${isPlaying ? "playing" : ""}`}>
      {isPlaying ? (
        <Icons.FiPauseCircle className="recent-play" />
      ) : (
        <Icons.FiPlayCircle className="recent-play" />
      )}
      <img src={thumbnail} alt="thumbnail" className="thumbnail-recent" />
      <span className="song-name">{name}</span>
      <span className="artists">{artists}</span>
      <span className="recent-genre">{genre}</span>
      <Icons.FiHeart className={isFavourite ? "heart favourite" : "heart"} />
      <span className="length">{time}</span>
      <span className="more">...</span>
    </div>
  );
}

export default RecentPlayed;
