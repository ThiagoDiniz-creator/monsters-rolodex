//Essential imports
import React from "react";

//Styles
import "../card/card.styles.css";

//Card component
export const Card = (props) => {
  return (
    <div className="card-container" key={props.monster.key}>
      <img
        alt="Monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
      <p>{props.monster.phone}</p>
    </div>
  );
};
