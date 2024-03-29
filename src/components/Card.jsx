import React, { useState } from "react";

export default function Card(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function MouseOut() {
    setIsMouseOver(false);
  };

  function mouseOver() {
    setIsMouseOver(true);
  };

  const cardStyle = {
    transform: isMouseOver ? "scale(1.1)" : "scale(1)",
    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${props.poster_path}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const infoStyle = { display: isMouseOver ? "block" : "none" };

  const genre = props.genre;
  var genreIds = props.genre_ids;
  const genreArray = [];
  for (let i = 0; i < genreIds.length; i++) {
    for (let j = 0; j < genre.length; j++) {
      if (genreIds[i] === genre[j].gId) {
        genreArray.push(genre[j].gName);
        genreArray.push(", ");
      };
    };
  };
  if(genreArray[genreArray.length - 1] === ", "){
    genreArray.pop();
  };

  console.log(genreArray);

  return (
    <div
      id="card"
      style={cardStyle}
      onMouseOver={mouseOver}
      onMouseOut={MouseOut}
    >
      <div id="Info" style={infoStyle}>
        <p style={{fontSize: "15px", color: "black"}}>Movie Name:{props.title}</p>
        <img
          id="cover"
          src={"https://image.tmdb.org/t/p/w500/" + props.poster_path}
          alt=""
          />
          <p style={{color: "black", fontSize:"11px", fontWeight: 600, padding:"4px 0 5px 0"}}>genre:{genreArray}</p>
        <p style={{color: "black"}}><span style={{fontWeight:800, color: "black"}}>Description :</span>{props.overview}</p>
      </div>
    </div>
  );
};