import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, FONT } from '../../enums/StyleGuide';
import Label from './Label';
import Pushups from '../../assets/svg/pushup.svg';
import Pullup from '../../assets/svg/pulups.svg';
import Run from '../../assets/svg/running.svg';
import Sit from '../../assets/svg/situps.svg';

const Score = () => {
    const workoutsData = [
        { icon: <Pushups width={20} height={20} />, label: "Pushups", count: 30 },
        { icon: <Pullup width={20} height={20} />, label: "Pullups", count: 30 },
        { icon: <Run width={20} height={20} />, label: "Mile Run", count: 2 },
        { icon: <Sit width={20} height={20} />, label: "Situps", count: 20 }
    ];

    const dates = ["18", "19", "20", "21", "22"];

    return (
        <View>
            <Label text={"Click on any day to see your score"} style={[styles.label, { marginBottom: 10 }]} textStyle={{ color: "#0057DA", fontSize: 11 }} />

            {dates.map((date, index) => (
                <View key={index} style={styles.container}>
                    <View style={styles.leftBlock}>
                        <Label text={date} textStyle={styles.labeltext} />
                        <Label text={"Mar"} textStyle={styles.labeltext} />
                    </View>
                    <View style={styles.middleBlock}>
                        {workoutsData.map((workout, idx) => (
                            <View key={idx}>
                                {workout.icon}
                                <View>
                                    <Label text={workout.label} textStyle={{ color: "#202020", fontFamily: FONT.Murecho_Medium, marginRight: 10, fontSize: 12, lineHeight: 13, marginTop: 5 }} />
                                    <Label text={workout.count.toString()} textStyle={{ color: "#202020", fontFamily: FONT.Murecho_Medium, fontSize: 12, marginTop: 1 }} />
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.rightBlock}>
                        <Label text={"Your Score"} textStyle={[styles.labeltext, { color: COLOR.white, marginBottom: 5 }]} />
                        <Label text={"100"} textStyle={[styles.labeltext, { color: COLOR.white }]} />
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Score;

const styles = StyleSheet.create({
    label: {
        width: '100%',
        paddingHorizontal: '10%',
        paddingVertical: '2%',
        backgroundColor: "#B5D2FF",
        borderRadius: 8
    },
    container: {
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Distribute children along the main axis
        alignItems: 'center', // Align children along the cross axis
        height: 100, // Example height
        marginTop: 7,
        backgroundColor: '#CCCCD8',
        borderRadius: 15,
        padding: '2%'
    },
    leftBlock: {
        width: '13%',
        backgroundColor: '#FFC000', // Example background color
        height: '100%', // Fill the container height
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleBlock: {
        width: '60%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    rightBlock: {
        width: '25%',
        backgroundColor: '#F44234', // Example background color
        height: '100%', // Fill the container height
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labeltext: {
        fontSize: 17,
        fontFamily: FONT.Murecho_Bold,
        color: COLOR.black
    }
});
