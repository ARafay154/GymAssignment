import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR, height, hp } from '../../enums/StyleGuide'
import Label from './Label'
import Pencil from '../../assets/svg/pencil.svg'

const Bio = () => {
    return (
        <View style={styles.Container}>
            <View style={{padding:5}}>
                <Label text={"I'm very passionate about helping others find happiness in life and feel good about themselves"} textStyle={styles.bio_Text} />
            </View>
            <TouchableOpacity style={{padding:5}}>
                <Pencil width={15} height={15} />
            </TouchableOpacity>

        </View>
    )
}

export default Bio

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLOR.Widget_background,
        marginTop: '7%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:'5%',
        paddingVertical:'3%'
    },
    bio_Text: {
        color: COLOR.white,
        fontSize: 12,


    }
})