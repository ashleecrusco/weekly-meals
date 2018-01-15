import React, { Component } from "react";
import { Label, Icon } from "semantic-ui-react";

class Tag extends Component {
  render() {
    return <Label as="a">{this.props.tag}</Label>;
  }
}

export default Tag;
