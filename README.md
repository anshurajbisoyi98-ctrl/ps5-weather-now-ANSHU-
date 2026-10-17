# PS5 - Weather Now

Weather app for 8 Indian cities with current weather and 7 day forecast.

Built with React + React Router (Vite).

**Live link:** _add vercel link here_

## API used
[Open-Meteo](https://open-meteo.com/) (free, no API key)

```
https://api.open-meteo.com/v1/forecast?latitude=:lat&longitude=:lon&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto
```

## Routes
| Route | Page |
| --- | --- |
| `/` | Home page with Check weather button |
| `/cities` | City cards with search |
| `/weather/:city` | Current temp, wind speed and 7 day min/max |
| `*` | Page not found |

## Screenshots
![Cities](screenshots/cities.png)
![Weather](screenshots/weather.png)

## Run locally
```
npm install
npm run dev
```
