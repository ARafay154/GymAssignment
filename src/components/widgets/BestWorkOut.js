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
            <View style={styles.titleRow}>
                <View>
                    <Label text={"My Best Workouts"} textStyle={styles.titleText} />
                </View>
                <View>
                    <Label text={"See All"} textStyle={styles.seeAllText} />
                </View>
            </View>

            <View style={styles.itemsRow}>
                {WorkoutItems.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Picture source={item.imageSource} style={styles.image} />
                        <Label text={item.labelText} textStyle={styles.itemLabelText} />
                        <View style={styles.scoreRow}>
                            <Label text={"Top Scores: "} textStyle={styles.scoreLabelText} />
                            <Label text={item.topScore.toString()} textStyle={styles.scoreValueText} />
                        </View>
                        <CustomButton title={"Details"} labelStyle={styles.buttonTitle} buttonStyle={styles.buttonView} />
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
        borderBottomWidth: 1,
        borderColor: '#4F4F5B'
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
    itemsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: '5%'
    },
    itemContainer: {
        width: wp(20)
    },
    image: {
        width: '100%',
        height: hp(10),
    },
    itemLabelText: {
        fontSize: 9,
        fontFamily: FONT.Murecho_Regular,
        color: COLOR.white,
        marginTop: 2,
        lineHeight: 15
    },
    scoreRow: {
        flexDirection: 'row',
        marginTop: 2
    },
    scoreLabelText: {
        fontSize: 9,
        fontFamily: FONT.Murecho_Regular,
        color: COLOR.white,
        lineHeight: 15
    },
    scoreValueText: {
        fontSize: 10,
        fontFamily: FONT.Murecho_Bold,
        color: COLOR.Button_color,
        lineHeight: 15
    },
    buttonTitle: {
        color: COLOR.white,
        textAlign: 'center',
        fontFamily: FONT.Murecho_Regular,
        fontSize: 10,
    },
    buttonView: {
        borderWidth: 1,
        borderColor: COLOR.text_color,
        width: wp(12),
        height: hp(2),
        borderRadius: 20,
        backgroundColor: "#1B1A1A",
        marginTop: 6
    },
})
