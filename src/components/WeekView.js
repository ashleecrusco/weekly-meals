import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class WeekView extends Component {
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell collapsing>Day</Table.HeaderCell>
            <Table.HeaderCell>Meal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Monday</Table.Cell>
            <Table.Cell
              id="monday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Tuesday</Table.Cell>
            <Table.Cell
              id="tuesday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Wednesday</Table.Cell>
            <Table.Cell
              id="wednesday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Thursday</Table.Cell>
            <Table.Cell
              id="thursday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Friday</Table.Cell>
            <Table.Cell
              id="friday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Saturday</Table.Cell>
            <Table.Cell
              id="saturday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell collapsing>Sunday</Table.Cell>
            <Table.Cell
              id="sunday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default WeekView;
