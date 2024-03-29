import React from "react";
import Card from "./Card";

export default function CardContainer(props) {
  // const genreNames = props.genre;
  return (
    <div id="card-container">
      {props.showValues.map((value, index) => (
        <Card
          genre = {props.genre}
          key={value.id}
          genre_ids={value.genre_ids}
          poster_path={value.poster_path}
          title={value.title}
          overview={value.overview}
        />
      ))}
    </div>
  );
}
