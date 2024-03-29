import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picture from './Picture'
import { hp, wp, width, height, COLOR, FONT } from '../../enums/StyleGuide'
import CustomButton from './CustomButton'
import Label from './Label'
import { TEXT_STYLE } from '../../enums/StyleGuide'

const Banner = () => {

    return (
        <View style={styles.container}>
            <View>
                <Picture source={require('../../assets/images/Banner_Image.png')} style={styles.image} />
                <Picture source={require('../../assets/images/Profile_Image.png')} style={styles.DP} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', }}>
                <View style={{ justifyContent: 'center', marginTop:'4%', }}>
                    <Label text={"Marvin Steward"} textStyle={styles.Name} />
                    <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center', marginTop: "2%", }}>
                        <Label text={"Fitness Trainer"} textStyle={{ color: COLOR.white, fontFamily: FONT.Murecho_Medium, fontSize: 10, }} />
                        <View style={{ display: 'flex', flexDirection: 'row',alignItems:'center', marginLeft: 12 }}>
                            <Label text={"@"} textStyle={{ color: COLOR.white, fontFamily: FONT.Murecho_Medium, fontSize: 12,marginRight:2 }} />
                            <Label text={"Shapes Body Zone"} textStyle={{ color: COLOR.text_color, fontFamily: FONT.Murecho_Medium, fontSize: 10 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop:"7%" }}>
                    <CustomButton title={"Friends"} labelStyle={styles.Btn_Title} buttonStyle={styles.Btn_View} />
                </View>
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        marginTop: '3%',

    },
    image: {
        width: "100%",
        height: hp(22),
        borderRadius: 12,
        resizeMode: 'cover',
        position: 'relative',

    },
    DP: {
        position: 'absolute',
        bottom: -40,
        left: 15,
        width: wp((87 / width) * 100),
        height: hp((87 / height) * 100),
    },
    Name: {
        color: COLOR.white,
        ...TEXT_STYLE.title_bold,
        fontSize: 21,
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
})