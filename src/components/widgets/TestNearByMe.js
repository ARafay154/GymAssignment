import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Label from './Label'
import { COLOR, FONT, hp, width, wp } from '../../enums/StyleGuide'
import En from '../../locales/En'
import Search from '../../assets/svg/search.svg'
import Notification from '../../assets/svg/notification.svg'

const TestNearByMe = () => {
    return (
        <View style={styles.container}>
            <Label text={"My Best Workouts"} textStyle={{ color: COLOR.Button_color, fontSize: 20, fontFamily: FONT.Murecho_Bold }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '3%' }}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={En.SearchBar}
                        placeholderTextColor={COLOR.white}
                    />
                </View>
                <View style={styles.searchIcon}>
                    <Search width={25} height={25} />
                </View>
            </View>

            {/* Map */}

            <View style={styles.NotificationView}>
                <Notification width={18} height={18} style={{marginRight:5}} />
                <Label text={En.notification_text} style={{ width: '100%' }} textStyle={{ color: "#0057DA", fontSize: 11 }} />
            </View>

        </View>
    )
}

export default TestNearByMe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '3%',

    },
    searchContainer: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#4F4F5B",
        width: wp(70),
        height: hp(6),
        paddingHorizontal: 10,
        backgroundColor: COLOR.black
    },
    searchIcon: {
        borderWidth: 0.5,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(11.5),
        height: hp(5.5),
        backgroundColor: COLOR.Button_color
    },
    input: {
        fontFamily: FONT.Murecho_Regular,
        fontSize: 14,
        color: COLOR.white,
    },
    NotificationView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#4F4F5B",
        width: "100%",
        height: hp(6),
        paddingHorizontal: 10,
        backgroundColor: "#B5D2FF",
        paddingLeft:'3%'
    }
})