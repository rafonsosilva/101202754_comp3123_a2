import React, { Fragment, Component } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import WeatherForecast from './pages/main/WeatherForecast'
import AppHeader from "./components/appHeader";

const styles = (theme) => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
});

function App() {
  return (
    <Fragment >
      <AppHeader />
      <WeatherForecast />
    </Fragment>
  );
}

export default App;
