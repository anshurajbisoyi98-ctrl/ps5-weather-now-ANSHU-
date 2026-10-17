# PS5 - Weather Now

Weather app for 8 Indian cities with current weather and 7 day forecast.

Built with React + React Router (Vite).

**Live link:** https://ps5-weather-now-anshu.vercel.app

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
<img width="1470" alt="Cities" src="https://github.com/user-attachments/assets/71e0b4f4-97a7-4648-a79b-e0ec2083c442" />

<img width="1470" alt="Weather" src="https://github.com/user-attachments/assets/51356d25-6f26-48d6-a8e8-be934425dda1" />

## Run locally
```
npm install
npm run dev
```
