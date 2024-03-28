import React, { useState } from "react";

export default function Card(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function MouseOut() {
    setIsMouseOver(false);
  }

  function mouseOver() {
    setIsMouseOver(true);
  }

  const cardStyle = {
    transform: isMouseOver ? "scale(1.1)" : "scale(1)",
    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${props.poster_path}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const infoStyle = { display: isMouseOver ? "block" : "none",};

  return (
    <div
      id="card"
      style={cardStyle}
      onMouseOver={mouseOver}
      onMouseOut={MouseOut}
    >
      <div id="Info" style={infoStyle}>
        <p>Movie Name:{props.title}</p>
        <p>Description:{props.overview}</p>
        <p>genre:{props.genre_ids}</p>
      </div>
    </div>
  );
}
//style={{display: isMouseOver? "block" : "none"}}
