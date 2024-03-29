import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Label from './Label';
import { COLOR, FONT, formattedDate, hp } from '../../enums/StyleGuide';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const Calender = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={{ marginVertical: '5%' }}>
            {/* Date show */}
            <Label text={formattedDate} textStyle={styles.date} />

            <Calendar
                style={{ marginTop: 10 }}
                hideExtraDays={true} // Hide extra days from other month
                hideArrows={true}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange', selectedColor: 'yellow' }
                }}
                theme={{
                    calendarBackground: 'black', // Set background color to black
                    todayTextColor: COLOR.black,
                    todayBackgroundColor: '#FFC000',
                    selectedDayTextColor: '#ffffff',
                    dayTextColor: '#929292',
                    selectedDayBackgroundColor: 'yellow',
                    monthTextColor:COLOR.white,
                    textMonthFontFamily:FONT.Murecho_Regular,
                }}
                
            />
        </View>
    );
};

export default Calender;

const styles = StyleSheet.create({
    date: {
        color: COLOR.text_color,
        fontFamily: FONT.Murecho_Regular,
        fontSize: 20,
        paddingBottom: '5%',
        borderBottomWidth: 0.5,
        borderColor: '#545454'
    },
});
