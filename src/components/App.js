import React, { Component } from "react";
import "../App.css";

import { Container, Divider, Card, Grid, Input } from "semantic-ui-react";

import Navbar from "./Navbar";
import WeekView from "./WeekView";
import DayView from "./DayView";
import MealsView from "./MealsView";
import NewMealForm from "./NewMealForm";
import MealCard from "./MealCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sidebar: "week",
      meals: [
        { name: "meal 1", time: "20min", tags: ["fast", "dinner"] },
        { name: "meal 2", time: "30min", tags: ["lunch"] },
        {
          name: "meal 3",
          time: "60min",
          tags: ["healthy", "dinner", "favorite"]
        },
        { name: "meal 4", time: "10min", tags: [] }
      ]
    };
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  handlePage = page => {
    this.setState({ page: page });
  };

  handleActivePage = page => {
    switch (page) {
      case "week":
        return (
          <WeekView
            drag={this.drag}
            drop={this.drop}
            allowDrop={this.allowDrop}
          />
        );
      case "day":
        return <DayView />;
      case "browse":
        return <MealsView />;
      case "add-meal":
        return <NewMealForm />;
      default:
        return null;
    }
  };

  handleMealCards = meals => {
    return meals.map(meal => {
      return (
        <MealCard
          key={meal.name}
          drag={this.drag}
          drop={this.drop}
          meal={meal}
        />
      );
    });
  };

  allowDrop = ev => {
    ev.preventDefault();
  };

  drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId";
    nodeCopy.setAttribute("draggable", false);
    ev.target.appendChild(nodeCopy);
  };

  render() {
    const activePage = this.handleActivePage(this.state.page);
    const mealCards = this.handleMealCards(this.state.meals);

    return (
      <div className="App">
        <Navbar handlePage={this.handlePage} />
        <Divider hidden />
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Container>{activePage}</Container>
              </Grid.Column>
              <Divider />
              <Grid.Column
                width={10}
                onDrop={this.drop}
                onDragOver={this.allowDrop}
              >
                <Divider hidden />
                <Input
                  fluid
                  icon="search"
                  placeholder="Search..."
                  onChange={this.handleChange}
                />
                <Divider hidden />
                <Card.Group itemsPerRow={3}>{mealCards}</Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
