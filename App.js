import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from "./src/components/Game";

export default class App extends React.Component {
  render() {
    return (
        <Game 
          randomNumberCount={6}
          initialSeconds = {10}
        />
    );
  }
}


