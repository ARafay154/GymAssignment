import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const Label = ({ text, style, textStyle }) => {
  return (
    <View style={[styles.text, style]}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </View>
  )
}

export default memo(Label)

const styles = StyleSheet.create({
  textStyle: {
    
  },
  text: {

  }
})