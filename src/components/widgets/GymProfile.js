import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import En from '../../locales/En'
import Label from './Label'
import { COLOR, FONT, hp, width, wp, } from '../../enums/StyleGuide'
import { TEXT_STYLE } from '../../enums/StyleGuide'
import Picture from './Picture'
import CustomButton from './CustomButton'

const GymProfile = () => {
    return (
        <View style={styles.container}>
            <Label text={En.PURE_GYM_CLUB} textStyle={styles.labeltext} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                <View>
                    <Picture source={require('../../assets/images/Like_two.png')} style={[styles.image, { position: 'relative', zIndex: 1 }]} />
                    <Picture source={require('../../assets/images/Like_one.png')} style={[styles.image, { position: 'absolute', left: "60%" }]} />
                </View>

                <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
                    <Label text={En['_2.3K']} textStyle={{ fontFamily: FONT.Murecho_Bold, color: COLOR.white, fontSize: 20, marginHorizontal: 10 }} />
                    <Label text={En._Likes} textStyle={styles.text} />
                    <Label text={En['_5.9K']} textStyle={{ fontFamily: FONT.Murecho_Bold, color: COLOR.white, fontSize: 20, marginHorizontal: 10 }} />
                    <Label text={En._Followers} textStyle={styles.text} />
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>

                <Picture source={require('../../assets/images/Members.png')} style={{ width: wp(36), height: hp(5), resizeMode: 'contain' }} />
                <View style={{ flexDirection: 'row', }}>
                    <Label text={En['_160k']} textStyle={{ fontFamily: FONT.Murecho_Bold, color: COLOR.white, fontSize: 20, marginHorizontal: 10 }} />
                    <Label text={En._Members} textStyle={styles.text} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                <CustomButton title={En._Whatsapp} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Like} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Report_an_Issue} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Classes} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Workout_Tests} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Members} labelStyle={styles.button} buttonStyle={styles.customButton} />
                <CustomButton title={En._Workout_Plans} labelStyle={styles.button} buttonStyle={styles.customButton} />
            </View>

        </View>
    )
}

export default GymProfile

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
        padding: "1%"
    },
    labeltext: {
        color: COLOR.white,
        ...TEXT_STYLE.title_bold,

    },
    image: {
        width: wp(10),
        height: (hp(5))
    },
    text: {
        color: COLOR.white,
        fontFamily: FONT.Murecho_Regular,
        fontSize: 20,
        color: COLOR.text_color
    },
    button: {
        backgroundColor: COLOR.Button_color,
        fontFamily: FONT.Murecho_Bold,
        marginRight: 5,
        paddingVertical: 5, // Adjust vertical padding
        paddingHorizontal: 15, // Adjust horizontal padding
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 5,
        flexShrink: 1,
        lineHeight: 20,
        fontSize: 11
    }

})