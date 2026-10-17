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
![Cities](<img width="1470" height="956" alt="Screenshot 2026-10-17 at 10 29 39 PM" src="https://github.com/user-attachments/assets/71e0b4f4-97a7-4648-a79b-e0ec2083c442" />
)
![Weather](<img width="1470" height="956" alt="Screenshot 2026-10-17 at 10 29 29 PM" src="https://github.com/user-attachments/assets/51356d25-6f26-48d6-a8e8-be934425dda1" />
)

## Run locally
```
npm install
npm run dev
```
