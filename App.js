import { useState } from "react";
import Accelerometer from "./app/screens/AccelerometerScreen";
import TapGameScreen from "./app/screens/TapGameScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const tapGame = <TapGameScreen/>
  const accelerometer = <Accelerometer/>
  const [screen, setScreen] = useState(<WelcomeScreen 
    onTapGame={() => setScreen(tapGame)}
    onAccelero={() => setScreen(accelerometer)}/>);

  return screen;
}
