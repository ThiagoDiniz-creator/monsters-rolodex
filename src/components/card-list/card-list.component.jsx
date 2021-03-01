//Essential imports
import React from "react";

//Styles
import "./card-list.styles.css";

//Components
import { Card } from "../card/card.component";

//CardList component
export const CardList = (props) => {
  return (
    <div className="card-list" key={props.id}>
      {props.monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};
