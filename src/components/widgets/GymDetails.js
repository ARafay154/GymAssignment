import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Label from './Label'
import CustomButton from './CustomButton'
import { COLOR, FONT, height, hp, width, wp } from '../../enums/StyleGuide'
import Direction from "../../assets/svg/direction.svg"
import Phone from "../../assets/svg/phone.svg"
import Email from "../../assets/svg/email.svg"
import Message from "../../assets/svg/message.svg"
import Clock from "../../assets/svg/clock.svg"
import En from '../../locales/En'
import Down from "../../assets/svg/downarrow.svg"


const GymDetails = () => {


    return (


        
        <View style={{ marginTop: '3%', padding: "5%", backgroundColor: COLOR.Widget_background, borderRadius: 12 }}>
            <View style={styles.head}>
                <Label text={"Details"} textStyle={styles.Name} />
            </View>

            <View style={{ marginTop: 5 }}>
                <View style={styles.view}>
                    <Direction width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.address} textStyle={styles.text} />
                </View>
                <View style={styles.view}>
                    <Phone width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.phone} textStyle={styles.text} />
                </View>
                <View style={styles.view}>
                    <Email width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.email} textStyle={styles.text} />
                </View>
                <View style={styles.view}>
                    <Message width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.message} textStyle={styles.text} />
                </View>
                <View style={styles.view}>
                    <Clock width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.Timming} textStyle={[styles.text, { marginRight: 10 }]} />
                    <Down width={15} height={15} style={{ justifyContent: 'center' }} />
                </View>

                <View style={styles.view}>
                    <View style={styles.view}>
                        <TouchableOpacity style={{ width: wp(4), height: hp(2), borderRadius: 10, backgroundColor: COLOR.Button_color }}>
                        </TouchableOpacity>
                        <Label text={"Private Account"} textStyle={[styles.text, { marginRight: 10 }]} />
                    </View>

                    <View style={styles.view}>
                        <TouchableOpacity style={{ width: wp(4), height: hp(2), borderRadius: 10, backgroundColor: COLOR['_#D9D9D9'] }}>
                        </TouchableOpacity>
                        <Label text={"Public Account"} textStyle={[styles.text, { marginRight: 10 }]} />
                    </View>
                </View>

                <CustomButton title={"Group Rules"} labelStyle={styles.button} buttonStyle={styles.customButton} />
            </View>

        </View>
    )
}

export default GymDetails

const styles = StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    Name: {
        color: COLOR.white,
        fontFamily: FONT.Murecho_Regular,
        fontSize: 24
    },
    Btn_Title: {
        color: COLOR.Button_color,
        textAlign: 'center',
        fontFamily: FONT.Murecho_Regular,
        fontSize: 16,
    },
    Btn_View: {
        borderWidth: 2,
        borderColor: COLOR.Button_color,
        width: wp((100 / width) * 100),
        height: hp((34 / height) * 100),
        borderRadius: 20,
        padding: '1%',
        backgroundColor: '#313131',
        marginLeft: 7

    },
    text: {
        color: COLOR.text_color,
        padding: 1,
        marginLeft: 10,
        flexShrink: 1,
        fontFamily: FONT.Murecho_Regular,
        fontSize: 13,
        lineHeight: 16,


    },
    view: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        padding: 1,
    },
    button: {
        fontFamily: FONT.Murecho_Regular,
        marginRight: 5,
        paddingVertical: 5,
        width: wp(20),
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 5,
        lineHeight: 15,
        fontSize: 11,
        color:COLOR.Button_color,
        borderWidth:1,
        borderColor:COLOR.Button_color
    }
})