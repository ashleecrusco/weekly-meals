import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class MealCard extends Component {
  render() {
    console.log(this.props.meal);
    return (
      <Card
        id={this.props.meal.name}
        draggable="true"
        onDragStart={this.props.drag}
      >
        <Card.Content>
          <Card.Header>{this.props.meal.name}</Card.Header>
          <Card.Meta>{this.props.meal.time}</Card.Meta>
          <Card.Description>
            Matthew is a pianist living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default MealCard;
