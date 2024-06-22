// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import React, { Component } from 'react';
// import { styles } from './styles'

// 1. functional component
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, My Name is Robby</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 30
    
  },
});
