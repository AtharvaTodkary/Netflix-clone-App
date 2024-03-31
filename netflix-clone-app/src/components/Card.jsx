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
        <img
          id="cover"
          src={"https://image.tmdb.org/t/p/w500/" + props.poster_path}
          alt=""
          />
          <div className="caption">
            <p className="title">{props.title}</p>
            <p>{genreArray}</p>
            <p className="text-truncate">{props.overview}</p>
          </div>
      </div>
    </div>
  );
};