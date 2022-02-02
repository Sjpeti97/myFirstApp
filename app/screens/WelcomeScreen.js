import React from "react";
import { Button, SafeAreaView, View } from "react-native";
import TapGameScreen from "./TapGameScreen";

function WelcomeScreen(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Button title="Tapgame" onPress={props.onTapGame}></Button>
      <Button title="Accelerometer" onPress={props.onAccelero}></Button>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
