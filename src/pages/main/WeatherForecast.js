import React, { Component } from "react";
import axios from "axios";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./WeatherForecast.css";

export default class WeatherForecast extends Component {
  //Define state default values
  state = {
    forecastList: [],
    location: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Toronto,ca&units=metric&appid=5ebd45104e8587a7ead9aca2823f7b96"
      )
      .then((res) => {
        const forecastList = res.data.list;
        const location = res.data.city;
        this.setState({ forecastList, location });
        console.log("Forecast List " + forecastList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <>
          <Box m={2}>
            <Typography variant="h6" color="inherit">
              Location: {this.state.location.name}
            </Typography>
            
          </Box>
          <table id="weatherList">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th colspan="2">Description</th>
                <th>Min °C</th>
                <th>Max °C</th>
                <th>Feels-like °C</th>
              </tr>
            </thead>
            <tbody>
              {this.state.forecastList.map((item) => (
                <tr>
                  <td>{item.dt_txt.substring(0,10)}</td>
                  <td>{item.dt_txt.substring(11,16)}</td>
                  <td>{item.weather[0].description}</td>
                  <td>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      width="30px"
                    />
                  </td>
                  <td>{item.main.temp_min}</td>
                  <td>{item.main.temp_max}</td>
                  <td>{item.main.feels_like}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    );
  }
}
