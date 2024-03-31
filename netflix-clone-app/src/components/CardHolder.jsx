import React from "react";
import RecommendTitle from "./RecommendTitle";
import CardContainer from "./CardContainer";

export default function CardHolder(props) {

  return (
    <div className="card-holder" id={props.id} >
      <RecommendTitle title={"Popular " + props.recommend} />
      <CardContainer showValues={props.value} genre={props.genre}/>
    </div>
  );
}
