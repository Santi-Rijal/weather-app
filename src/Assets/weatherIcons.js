import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiWindy,
  WiThunderstorm,
} from "react-icons/wi";

const weatherIcons = [
  { condition: "Sunny", icon: <WiDaySunny /> },
  { condition: "Rain", icon: <WiRain /> },
  { condition: "Snow", icon: <WiSnow /> },
  { condition: "Windy", icon: <WiWindy /> },
  { condition: "Thunderstorms", icon: <WiThunderstorm /> },
];

export default weatherIcons;
