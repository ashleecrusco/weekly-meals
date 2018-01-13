import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";

class WeekView extends Component {
  render() {
    return (
      <Table celled columns="seven">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Monday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Tuesday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Wednesday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Thursday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Friday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Saturday</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Sunday</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell
              textAlign="center"
              id="monday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
              id="tuesday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
              id="wednesday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
              id="thursday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
              id="friday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
              id="saturday"
              className="dropzone"
              onDrop={this.props.drop}
              onDragOver={this.props.allowDrop}
            />
            <Table.Cell
              textAlign="center"
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
