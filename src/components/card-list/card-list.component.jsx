import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("Render from Card List");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster, _) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
