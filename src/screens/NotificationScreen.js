import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLOR, hp } from '../enums/StyleGuide'
import ScoreBoardHeader from '../components/Header/ScoreBoardHeader'
import Calender from '../components/widgets/Calender'
import Label from '../components/widgets/Label'
import Notification from '../assets/svg/notification.svg'
import WeekView from 'react-native-week-view';

const NotificationScreen = () => {
  const myEvents = [
    {
      id: 1,
      startDate: new Date(2023, 1, 20, 9),
      endDate: new Date(2023, 1, 20, 11),
      color: 'blue',
      description: 'E1',
      // ... more properties if needed,
    },
    {
      id: 2,
      startDate: new Date(2023, 1, 22, 10),
      endDate: new Date(2023, 1, 22, 11, 30),
      color: 'red',
      description: 'E2',
    },
    // more events...
  ];



  return (
    <View style={styles.container}>
      <ScoreBoardHeader />
      <ScrollView>
        <Calender />
        <View style={styles.NotificationView}>
          <Notification width={18} height={18} style={{ marginRight: 5 }} />
          <Label text={"Click on any day to see your class details"} style={{ width: '100%' }} textStyle={{ color: "#0057DA", fontSize: 11 }} />
        </View>
      </ScrollView>

      {/* <WeekView
        events={myEvents}
        selectedDate={new Date(2021, 3, 15)}
        numberOfDays={7}
        headerStyle={{backgroundColor: '#4286f4', color: '#fff', borderColor: '#fff'}}
      /> */}
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    padding: "6%",
  },
  label: {
    width: '100%',
    paddingHorizontal: '10%',
    paddingVertical: '2%',
    backgroundColor: "#B5D2FF",
    borderRadius: 8
  },
  NotificationView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4F4F5B",
    width: "100%",
    height: hp(4),
    paddingHorizontal: 10,
    backgroundColor: "#B5D2FF",
    paddingLeft: '3%'
  }
})