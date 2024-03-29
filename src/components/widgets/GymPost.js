import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR, FONT, hp, width, wp } from '../../enums/StyleGuide';
import Picture from './Picture';
import Label from './Label';
import Calender from '../../assets/svg/calender.svg'
import Heart from '../../assets/svg/heart.svg'
import Thumb from '../../assets/svg/thumbsUp.svg'

const GymPost = () => {
    const postData = [
        { id: 1, label: "#gym #fitness #workoutplan #diet #bodybuilding" },
        { id: 2, label: "#gym #fitness #workoutplan #diet #bodybuilding" },
        { id: 3, label: "#gym #fitness #workoutplan #diet #bodybuilding" }
    ];
    const renderContent = (data) => {
        return (
            <View key={data.id} style={{ marginVertical: '3%', padding: "3%",backgroundColor: COLOR.Widget_background, borderRadius: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Picture source={require('../../assets/images/GymDP.png')} style={styles.image} />
                    <View style={{ flexShrink: 1, paddingTop: "5%" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, flexWrap: 'wrap', flexShrink: 1 }}>
                            <Label text={"Shapes Fitness "} textStyle={styles.bold} />
                            <Label text={" is feeling loved at "} textStyle={styles.text} />
                            <Label text={"Shapes Fitness Club"} textStyle={styles.bold} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Label text={" Feb 9 "} textStyle={styles.text} />
                            <Calender width={16} height={16} />
                        </View>
                    </View>
                </View>
                <Label text={data.label} textStyle={{ fontFamily: FONT.Murecho_Regular, color: COLOR.blue, paddingHorizontal: "5%", marginVertical: '3%', fontSize: 12, lineHeight: 12 }} />
                <View style={{  }}>
                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <Picture source={require('../../assets/images/Profile.png')} style={{ flex: 1.2, height: hp(18), }} />
                        <Picture source={require('../../assets/images/Profile_two.png')} style={{ flex: 0.4, height: hp(18), }} />
                        <Picture source={require('../../assets/images/Profile_three.png')} style={{ flex: 0.2, height: hp(18) }} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2%', borderBottomWidth: 0.5, borderColor: COLOR.text_color }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 5 }}>
                            <Thumb width={16} height={16} style={{ marginRight: 5 }} />
                            <Heart width={16} height={16} style={{ marginRight: 5 }} />
                            <Label text={"Umair Saeed and 20 others"} textStyle={{ fontFamily: FONT.Murecho_Regular, color: "#929292" }} />
                        </View>
                        <View>
                            <Label text={"38 Views"} textStyle={{ fontFamily: FONT.Murecho_Regular, color: "#929292" }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 5 }}>
                            <Thumb width={16} height={16} style={{ marginRight: 5 }} />
                            <Label text={"Like"} textStyle={{ fontFamily: FONT.Murecho_Regular, color: "#929292" }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 5 }}>
                            <Thumb width={16} height={16} style={{ marginRight: 5 }} />
                            <Label text={"Comment"} textStyle={{ fontFamily: FONT.Murecho_Regular, color: "#929292" }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 5 }}>
                            <Thumb width={16} height={16} style={{ marginRight: 5 }} />
                            <Label text={"Share"} textStyle={{ fontFamily: FONT.Murecho_Regular, color: "#929292" }} />
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View>
            {postData.map(item => renderContent(item))}
        </View>
    );
};

export default GymPost;

const styles = StyleSheet.create({
    image: {
        width: wp(18),
        height: hp(10),
        borderRadius: 10, // Add borderRadius to Picture component if needed
    },
    bold: {
        fontFamily: FONT.Murecho_Medium,
        fontSize: 16,
        color: COLOR.white,
        lineHeight: 22
    },
    text: {
        fontFamily: FONT.Murecho_Regular,
        fontSize: 16,
        color: "#929292",
        lineHeight: 21
    },
});
