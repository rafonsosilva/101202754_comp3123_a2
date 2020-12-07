# Simple React JS Weather App

### API Source
https://openweathermap.org/

### API KEY
To make the app work:
1. Create your own API Key on https://openweathermap.org/.
2. Create a file named ".env" on the root directory and write in it:
    REACT_APP_WEATHER_API_KEY = "paste your api key here removing the quotation signs"
3. Nothing else is needed. The API Key value from the .env file will be saved in the API_KEY variable present in the WeatherForecast.js file, which is being concatenated with the API link present in the "axios.get()" call.
    
### Location
In this initial version V1.0, the weather location is set fixed to Toronto, CA.

### Screenshots
![Main Screen](./screenshots/main.jpg)

