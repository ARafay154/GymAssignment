import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR, FONT, hp } from '../../enums/StyleGuide';
import Label from './Label';

const Summary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
      <Label text={"103"} textStyle={styles.num} />
      <Label text={"Total Score"} textStyle={styles.words} />
      </View>
      <View style={[styles.block, {borderLeftWidth:0.5,borderRightWidth:0.5, borderColor:COLOR.white}]}>
      <Label text={"86"} textStyle={styles.num} />
      <Label text={"Total Exercises"} textStyle={styles.words} />
      </View>
      <View style={styles.block}>
      <Label text={"45"} textStyle={styles.num} />
      <Label text={"Total Hours"} textStyle={styles.words} />
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  block: {
    height: hp(9),
    marginVertical:"5%",
    margin:1,
    justifyContent:'space-around',
    paddingHorizontal:"5%"
  },
  num:{
    fontSize:26,
    fontFamily:FONT.Murecho_Bold,
    color:COLOR.white
  },
  words:{
    fontSize:18,
    fontFamily:FONT.Murecho_Regular,
    color:COLOR.text_color
  }
});


