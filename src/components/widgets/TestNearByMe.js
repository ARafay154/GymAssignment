import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Label from './Label'
import { COLOR, FONT, hp, width, wp } from '../../enums/StyleGuide'
import En from '../../locales/En'
import Search from '../../assets/svg/search.svg'
import Notification from '../../assets/svg/notification.svg'
import MapView, { Marker } from 'react-native-maps';

const TestNearByMe = () => {
    return (
        <View style={styles.container}>
            <Label text={"My Best Workouts"} textStyle={styles.labelText} />

            <View style={styles.searchRow}>
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
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        image={{ uri: 'https://www.example.com/your_image.png' }}
                        title="Abdul Rafay"
                    />
                </MapView>
            </View>

            <View style={styles.notificationView}>
                <Notification width={18} height={18} style={styles.notificationIcon} />
                <Label text={En.notification_text} style={styles.notificationText} textStyle={styles.notificationTextStyle} />
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
    labelText: {
        color: COLOR.Button_color,
        fontSize: 20,
        fontFamily: FONT.Murecho_Bold
    },
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
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
    notificationView: {
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
        paddingLeft: '3%'
    },
    notificationIcon: {
        marginRight: 5
    },
    notificationText: {
        width: '100%'
    },
    notificationTextStyle: {
        color: "#0057DA",
        fontSize: 11
    },
    mapContainer: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        aspectRatio: 1,
        marginVertical: '3%'
    },
    map: {
        width: '100%',
        height: "100%",
        position: 'absolute',
    },
})
