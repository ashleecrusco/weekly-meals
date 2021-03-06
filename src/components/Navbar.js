import React, { Component } from "react";
import { Dropdown, Menu, Icon } from "semantic-ui-react";

class Navbar extends Component {
  onItemClick = (event, data) => {
    this.props.handlePage(data.value);
  };

  render() {
    let date = new Date();
    return (
      <div>
        <Menu attached="top">
          <Dropdown item icon="calendar" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">View</span>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.onItemClick} value="week">
                    Week
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.onItemClick} value="day">
                    Day
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item onClick={this.onItemClick} value="share">
                Share
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item icon="food" simple>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.onItemClick} value="browse">
                Browse
              </Dropdown.Item>

              <Dropdown.Item onClick={this.onItemClick} value="add-meal">
                Add New Meal
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item position="right">{date.toDateString()}</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
