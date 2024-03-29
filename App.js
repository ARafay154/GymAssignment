import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomNavigator from './src/navigation/BottomNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar hidden/>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})