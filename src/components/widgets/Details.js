import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from './Label'
import CustomButton from './CustomButton'
import { COLOR, FONT, height, hp, width, wp } from '../../enums/StyleGuide'
import Direction from "../../assets/svg/direction.svg"
import Phone from "../../assets/svg/phone.svg"
import Email from "../../assets/svg/email.svg"
import Message from "../../assets/svg/message.svg"
import Personal from "../../assets/svg/personal.svg"
import En from '../../locales/En'

const Details = () => {

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Label text={"Details"} textStyle={styles.Name} />
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <CustomButton title={"My Calander"} labelStyle={styles.Btn_Title} buttonStyle={styles.Btn_View} />
                    <CustomButton title={"Referrals"} labelStyle={styles.Btn_Title} buttonStyle={styles.Btn_View} />
                </View>
            </View>

            <View style={{marginTop:5}}>
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
                    <Personal width={16} height={16} style={{ justifyContent: 'center' }} />
                    <Label text={En.personal_details} textStyle={styles.text} />
                </View>
            </View>

        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container:{
        marginTop: '3%', 
        padding: "5%", 
        backgroundColor: COLOR.Widget_background, 
        borderRadius: 12
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    Name: {
        color: COLOR.white,
        fontFamily: FONT.Murecho_Bold,
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
        fontFamily:FONT.Murecho_Regular,
        fontSize:13,
        lineHeight:16,


    },
    view: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems:'center',
        marginBottom: 10,
        padding: 1,
    }
})