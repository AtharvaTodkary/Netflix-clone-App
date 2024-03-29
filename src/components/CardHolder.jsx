import React from "react";
import RecommendTitle from "./RecommendTitle";
import CardContainer from "./CardContainer";

export default function CardHolder(props) {

  return (
    <div id="card-holder">
      <RecommendTitle title={"Popular " + props.recommend} />
      <CardContainer showValues={props.value} genre={props.genre}/>
    </div>
  );
}
