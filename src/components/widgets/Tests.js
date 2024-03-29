import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Label from './Label'
import { COLOR, FONT, height, hp, width, wp } from '../../enums/StyleGuide'
import Picture from './Picture'
import Flame from '../../assets/svg/flame.svg'
import Pushups from '../../assets/svg/pushup.svg'
import Pullup from '../../assets/svg/pulups.svg'
import Run from '../../assets/svg/running.svg'
import Sit from '../../assets/svg/situps.svg'
import CustomButton from './CustomButton'
import Collapsible from 'react-native-collapsible';

const Tests = () => {
  const blockData = [
    { label: "Test", date: "02-Mar-2023" },
    { label: "Test", date: "02-Mar-2023" },
    { label: "Test", date: "02-Mar-2023" },
    { label: "Test", date: "02-Mar-2023" },
    { label: "Test", date: "02-Mar-2023" }
  ];

  const workoutsData = [
    { icon: <Pushups width={25} height={25} />, label: "Pushups", count: 30 },
    { icon: <Pullup width={25} height={25} />, label: "Pullups", count: 30 },
    { icon: <Run width={25} height={25} />, label: "Mile Run", count: 30 },
    { icon: <Sit width={25} height={25} />, label: "Situps", count: 30 }
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (

    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View>
          <Label text={"My Tests"} textStyle={styles.titleText} />
        </View>
        <View>
          <Label text={"See All"} textStyle={styles.seeAllText} />
        </View>
      </View>

      {/* on click below Component next 2 component hide or show means collapse */}
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <View style={styles.testRow}>
          <View style={styles.testInfo}>
            <Picture source={require('../../assets/images/Test_img.png')} style={styles.image} />
            <View style={styles.testInfoText}>
              <Label text={"Test"} textStyle={styles.testLabelText} />
              <Label text={"02-Mar-2023"} textStyle={styles.testDateText} />
            </View>
          </View>
          <View style={styles.scoresInfo}>
            <Flame width={28} height={28} style={styles.flameIcon} />
            <Label text={"My Scores : 6588"} textStyle={styles.scoresText} />
          </View>
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <View style={styles.workoutContainer}>
          <Label text={"Today Workout"} textStyle={styles.workoutTitle} />
          <View style={styles.workoutRow}>
            {workoutsData.map((workout, index) => (
              <View key={index} style={styles.workoutItem}>
                {workout.icon}
                <View style={styles.workoutItemText}>
                  <Label text={workout.label} textStyle={styles.workoutItemLabelText} />
                  <Label text={workout.count.toString()} textStyle={styles.workoutItemCountText} />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.blockContainer}>
          {blockData.map((data, index) => (
            <View key={index} style={styles.block}>
              <Label text={data.label} textStyle={styles.blockLabelText} />
              <Label text={data.date} textStyle={styles.blockDateText} />
              <CustomButton title={"Details"} labelStyle={styles.buttonTitle} buttonStyle={styles.buttonView} />
            </View>
          ))}
        </View>
      </Collapsible>

    </View>

  )
}

export default Tests

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '3%',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  titleText: {
    color: COLOR.Button_color,
    fontSize: 20,
    fontFamily: FONT.Murecho_Bold
  },
  seeAllText: {
    color: COLOR.white,
    fontSize: 15,
    fontFamily: FONT.Murecho_Regular
  },
  testRow: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#929292'
  },
  testInfo: {
    width: "50%",
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '3%'
  },
  image: {
    width: wp(10),
    height: hp(5),
    borderRadius: 25
  },
  testInfoText: {
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  testLabelText: {
    textAlign: 'left',
    color: COLOR.white,
    fontSize: 18,
    fontFamily: FONT.Murecho_Medium
  },
  testDateText: {
    textAlign: 'left',
    color: "#202020",
    fontSize: 13,
    fontFamily: FONT.Murecho_Regular
  },
  scoresInfo: {
    width: "50%",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  flameIcon: {
    marginRight: 5
  },
  scoresText: {
    textAlign: 'left',
    color: COLOR.white,
    fontSize: 15,
    fontFamily: FONT.Murecho_Regular,
    lineHeight: 25
  },
  workoutContainer: {
    backgroundColor: '#D9D9D9',
    padding: '5%',
    marginTop: 2,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  workoutTitle: {
    color: "#202020",
    fontFamily: FONT.Murecho_Medium,
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 25
  },
  workoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  workoutItem: {
    paddingHorizontal: '7%'
  },
  workoutItemText: {
    flexDirection: 'row'
  },
  workoutItemLabelText: {
    color: "#202020",
    fontFamily: FONT.Murecho_Medium,
    marginRight: 10,
    lineHeight: 25
  },
  workoutItemCountText: {
    color: "#202020",
    fontFamily: FONT.Murecho_Medium,
    lineHeight: 25
  },
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10
  },
  block: {
    width: wp(17),
    height: hp(12),
    aspectRatio: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  blockLabelText: {
    color: COLOR.white,
    fontSize: 14,
    fontFamily: FONT.Murecho_Medium,
    marginBottom: 2
  },
  blockDateText: {
    color: "#202020",
    fontSize: 10,
    fontFamily: FONT.Murecho_Regular,
    marginBottom: 3
  },
  buttonTitle: {
    color: COLOR.black,
    textAlign: 'center',
    fontFamily: FONT.Murecho_Regular,
    fontSize: 10
  },
  buttonView: {
    borderWidth: 2,
    borderColor: COLOR.Button_color,
    width: wp(12),
    height: hp(2),
    borderRadius: 20,
    backgroundColor: COLOR.Button_color
  }
})
