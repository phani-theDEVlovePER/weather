# Weather Dashboard: Time-bound Challenge

## Background

You are tasked with creating a weather dashboard using HTML, CSS, and ReactJS. The dashboard will display current weather information for multiple cities using a weather API.

## Basic Requirements

1. Users should be able to search for a city's weather by entering a city name.
2. Display the current weather information for multiple cities in cards.
3. Users should be able to delete a city's weather card.

## Advanced Requirements

1. Toggle between Celsius and Fahrenheit for temperature display.
2. Implement pagination to display only 3 cities per page.
3. Display a basic line graph showing temperature trends for the past 24 hours for a selected city.
4. Implement a responsive design that adapts to mobile and tablet views.

## Code Snippet

\`\`\`js
// Starting point code
import React, { useState } from 'react';

function WeatherDashboard() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    return response.json();
  }

  const addCity = () => {
    const weather = fetchWeather(search);
    setCities([...cities, weather]);
  };

  const deleteCity = (city) => {
    setCities(cities.filter(c => c.name !== city.name));
  };

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={addCity}>Add City</button>
      <div>
        {cities.map(city => (
          <div key={city.name}>
            <h2>{city.name}</h2>
            <p>Temperature: {city.main.temp}</p>
            <button onClick={() => deleteCity(city)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

## Bugs to Fix

1. The city search and addition are not functioning properly.
2. The temperature is not being displayed.
3. The delete functionality is not working.

## Tips

- Prioritize tasks and implement the basic requirements first before diving into advanced features.
- Use debugging techniques like browser developer tools or console logs effectively.
- Consider the use of third-party libraries for the line graph, but ensure you understand how it works.

## Deliverables

1. A working Weather Dashboard that meets the basic and advanced requirements. (JSfiddle link)
2. A brief write-up explaining:
   - The bugs you found and how you fixed them.
   - How you implemented the advanced features.

## Bonus

1. Add error handling for API calls.
2. Implement a loading spinner while the weather information is being fetched.
