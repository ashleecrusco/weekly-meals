import React, { Component } from "react";
import "../App.css";

import { Container, Divider, Card } from "semantic-ui-react";

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
      page: "week",
      meals: [
        { name: "meal 1", time: "20min" },
        { name: "meal 2", time: "30min" },
        { name: "meal 3", time: "60min" },
        { name: "meal 4", time: "10min" }
      ]
    };
  }

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
    console.log("happening", ev.target);
    ev.dataTransfer.setData("text", ev.target.id);
  };

  drop = ev => {
    ev.preventDefault();
    console.log(ev.target, ev.dataTransfer, ev);
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  };

  render() {
    const activePage = this.handleActivePage(this.state.page);
    const mealCards = this.handleMealCards(this.state.meals);

    return (
      <div className="App">
        <Navbar handlePage={this.handlePage} />
        <Divider hidden />
        <Container>{activePage}</Container>
        <Divider hidden />
        <Container>
          <Card.Group itemsPerRow={7}>{mealCards}</Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
