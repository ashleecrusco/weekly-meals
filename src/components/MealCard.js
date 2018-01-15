import React, { Component } from "react";
import { Card, Label, Divider } from "semantic-ui-react";
import Tag from "./Tag";

class MealCard extends Component {
  createTags = tags => {
    if (tags.length > 0) {
      return tags.map(tag => {
        return <Tag tag={tag} key={tag} />;
      });
    } else {
      return null;
    }
  };

  render() {
    const tagGroup = this.createTags(this.props.meal.tags);

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
        <Card.Content extra>
          <Label.Group size="mini">{tagGroup}</Label.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default MealCard;
