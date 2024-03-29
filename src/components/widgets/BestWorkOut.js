import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from './Label'
import { COLOR, FONT, height, hp, width, wp } from '../../enums/StyleGuide'
import Picture from './Picture'
import CustomButton from './CustomButton'

const BestWorkOut = () => {
    const WorkoutItems = [
        { 
          imageSource: require('../../assets/images/PressUp.png'), 
          labelText: "My Pushups Workouts", 
          topScore: 96 
        },
        { 
          imageSource: require('../../assets/images/Fitpull.png'), 
          labelText: "My Pullups Workouts", 
          topScore: 96  
        },
        { 
          imageSource: require('../../assets/images/Pushup.png'), 
          labelText: "My Planks Workouts", 
          topScore: 96 
        },
        { 
          imageSource: require('../../assets/images/Running.png'), 
          labelText: "My Daily Running", 
          topScore: 96 
        }
      ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                <View>
                    <Label text={"My Best Workouts"} textStyle={{ color: COLOR.Button_color, fontSize: 20, fontFamily: FONT.Murecho_Bold }} />
                </View>
                <View>
                    <Label text={"See All"} textStyle={{ color: COLOR.white, fontSize: 15, fontFamily: FONT.Murecho_Regular }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginBottom:'5%' }}>
                {WorkoutItems.map((item, index) => (
                    <View key={index} style={{ width: wp(20) }}>
                        <Picture source={item.imageSource} style={styles.image} />
                        <Label text={item.labelText} textStyle={{ fontSize: 9, fontFamily: FONT.Murecho_Regular, color: COLOR.white, marginTop: 2, lineHeight: 15 }} />
                        <View style={{ flexDirection: 'row', marginTop: 2 }}>
                            <Label text={"Top Scores: "} textStyle={{ fontSize: 9, fontFamily: FONT.Murecho_Regular, color: COLOR.white, lineHeight: 15 }} />
                            <Label text={item.topScore.toString()} textStyle={{ fontSize: 10, fontFamily: FONT.Murecho_Bold, color: COLOR.Button_color, lineHeight: 15 }} />
                        </View>
                        <CustomButton title={"Details"} labelStyle={styles.Btn_Title} buttonStyle={styles.Btn_View} />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default BestWorkOut

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth:1,
        borderColor:'#4F4F5B'
    },
    image: {
        width: '100%',
        height: hp(10),
    },
    labeltext: {
        color: 'white'
    },
    Btn_Title: {
        color: COLOR.white,
        textAlign: 'center',
        fontFamily: FONT.Murecho_Regular,
        fontSize: 10,
    },
    Btn_View: {
        borderWidth: 1,
        borderColor: COLOR.text_color,
        width: wp(12),
        height: hp(2),
        borderRadius: 20,
        backgroundColor: "#1B1A1A",
        marginTop: 6

    },


})
