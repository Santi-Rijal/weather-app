import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiWindy,
  WiThunderstorm,
  WiCloudy,
  WiDayCloudy,
  WiHail,
  WiFog,
  WiSleet,
} from "react-icons/wi";

const weatherIcons = [
  { condition: "Sunny", icon: <WiDaySunny /> },
  { condition: "Rain", icon: <WiRain /> },
  { condition: "Snow", icon: <WiSnow /> },
  { condition: "Windy", icon: <WiWindy /> },
  { condition: "Cloudy", icon: <WiCloudy /> },
  { condition: "Thunderstorms", icon: <WiThunderstorm /> },
  { condition: "Mostly Sunny", icon: <WiDaySunny /> },
  { condition: "Partly Cloudy", icon: <WiDayCloudy /> },
  { condition: "Mostly Cloudy", icon: <WiCloudy /> },
  { condition: "Hail", icon: <WiHail /> },
  { condition: "Fog", icon: <WiFog /> },
  { condition: "Sleet", icon: <WiSleet /> },
];

export default weatherIcons;
