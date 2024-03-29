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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
        <View>
          <Label text={"My Tests"} textStyle={{ color: COLOR.Button_color, fontSize: 20, fontFamily: FONT.Murecho_Bold }} />
        </View>
        <View>
          <Label text={"See All"} textStyle={{ color: COLOR.white, fontSize: 15, fontFamily: FONT.Murecho_Regular }} />
        </View>
      </View>



      {/* on click below Component next 2 component hide or show means collapse */}
      <TouchableOpacity onPress={()=>setIsCollapsed(!isCollapsed)}>
        <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#929292', }}>
          <View style={{ width: "50%", flexDirection: 'row', alignContent: 'center', justifyContent: 'center', padding: '3%' }}>
            <Picture source={require('../../assets/images/Test_img.png')} style={styles.image} />
            <View style={{ marginHorizontal: 10, justifyContent: 'center', }}>
              <Label text={"Test"} textStyle={{ textAlign: 'left', color: COLOR.white, fontSize: 18, fontFamily: FONT.Murecho_Medium }} />
              <Label text={"02-Mar-2023"} textStyle={{ textAlign: 'left', color: "#202020", fontSize: 13, fontFamily: FONT.Murecho_Regular }} />
            </View>
          </View>
          <View style={{ width: "50%", flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Flame width={28} height={28} style={{ marginRight: 5 }} />
            <Label text={"My Scores : 6588"} textStyle={{ textAlign: 'left', color: COLOR.white, fontSize: 15, fontFamily: FONT.Murecho_Regular, lineHeight: 25 }} />
          </View>
        </View>
      </TouchableOpacity>


      <Collapsible collapsed={isCollapsed}>


        <View style={{ backgroundColor: '#D9D9D9', padding: '5%', marginTop: 2, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
          <Label text={"Today Workout"} textStyle={{ color: "#202020", fontFamily: FONT.Murecho_Medium, marginBottom: 20, fontSize: 18, lineHeight: 25 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {workoutsData.map((workout, index) => (
              <View key={index} style={{ paddingHorizontal: '7%' }}>
                {workout.icon}
                <View style={{ flexDirection: 'row' }}>
                  <Label text={workout.label} textStyle={{ color: "#202020", fontFamily: FONT.Murecho_Medium, marginRight: 10, lineHeight: 25 }} />
                  <Label text={workout.count.toString()} textStyle={{ color: "#202020", fontFamily: FONT.Murecho_Medium, lineHeight: 25 }} />
                </View>
              </View>
            ))}
          </View>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 10 }}>
          {blockData.map((data, index) => (
            <View key={index} style={styles.blocks}>
              <Label text={data.label} textStyle={{ color: COLOR.white, fontSize: 14, fontFamily: FONT.Murecho_Medium, marginBottom: 2 }} />
              <Label text={data.date} textStyle={{ color: "#202020", fontSize: 10, fontFamily: FONT.Murecho_Regular, marginBottom: 3 }} />
              <CustomButton title={"Details"} labelStyle={styles.Btn_Title} buttonStyle={styles.Btn_View} />
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

  image: {
    width: wp(10),
    height: hp(5),
    borderRadius: 25
  },
  blocks: {
    width: wp(17), // 20% width for each block to fit 5 blocks in a row
    height: hp(12),
    aspectRatio: 1, // Maintain aspect ratio (square blocks)
    backgroundColor: '#D9D9D9', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  Btn_Title: {
    color: COLOR.black,
    textAlign: 'center',
    fontFamily: FONT.Murecho_Regular,
    fontSize: 10,
  },
  Btn_View: {
    borderWidth: 2,
    borderColor: COLOR.Button_color,
    width: wp(12),
    height: hp(2),
    borderRadius: 20,
    backgroundColor: COLOR.Button_color,

  },
})
