# Weather Dashboard

## Description

This is a weather dashboard with form inputs that enables traveler to see the weather outlook for multiple cities so that they can plan a trip accordingly

- When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
- When a user views the current weather conditions for that city they are presented with:
  - The city name
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
  - The wind speed
- When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
- When a user click on a city in the search history they are again presented with current and future conditions for that city
  HTML, CSS, Java Script, Bootstrap, Dayjs and API (https://openweathermap.org/) were used in the development of this application.

**Here is the link to this project** https://23birola.github.io/weather-dashboard-pobedynska/

**Here is the project demo**

![game demo](/assets/images/demo.png)

## License

This project is licensed under the MIT License. For details, please see the LICENSE file. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Your Task

Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The link should take you to a guide on how to use the 5 Day Forecast API. You will need to register for an API key in order to use this API. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

The base URL for your API calls should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```text
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

- Create a weather dashboard with form inputs.
  - When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  - When a user views the current weather conditions for that city they are presented with:
    - The city name
    - The date
    - An icon representation of weather conditions
    - The temperature
    - The humidity
    - The wind speed
  - When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    - The date
    - An icon representation of weather conditions
    - The temperature
    - The humidity
  - When a user click on a city in the search history they are again presented with current and future conditions for that city

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/10-server-side-apis-challenge-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> - A repository that has no code
>
> - A repository that includes a unique name but nothing else
>
> - A repository that includes only a README file but nothing else
>
> - A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - Uses the OpenWeather API to retrieve weather data.

  - Uses `localStorage` to store persistent data.
