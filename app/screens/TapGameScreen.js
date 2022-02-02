import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableHighlight,
    StatusBar,
  } from "react-native";

function TapGameScreen(props) {
  const [countA, setA] = useState(0);
  const [countB, setB] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <TouchableHighlight onPress={() => setA(countA + 1)}>
        <View style={styles.red} />
      </TouchableHighlight>

      <Text style={[styles.upsideDown, styles.counter]}>{countA}</Text>

      <Text style={styles.counter}>{countB}</Text>

      <TouchableHighlight onPress={() => setB(countB + 1)}>
        <View style={styles.blue} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    justifyContent: "space-around",
  },

  red: {
    backgroundColor: "red",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  blue: {
    backgroundColor: "blue",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  upsideDown: {
    transform: [{ rotate: "180deg" }],
  },
  counter: {
    fontSize: 40,
    color: "white",
  },
});

export default TapGameScreen;
