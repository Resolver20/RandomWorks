import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import MainScreen from './app/components/MainScreen';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <MainScreen />
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
