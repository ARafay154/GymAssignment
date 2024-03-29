import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import BackArrow from '../../assets/svg/backarrow.svg'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import { TEXT_STYLE } from '../../enums/StyleGuide'
import Setting from '../../assets/svg/setting.svg'
import Label from '../widgets/Label'


const ScoreBoardHeader = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <BackArrow width={25} height={25} />
      </TouchableOpacity>

      <Label text={"Classes"} textStyle={styles.labeltext} />

      <TouchableOpacity>
        <Setting width={25} height={25} />
      </TouchableOpacity>

    </View>
  )
}

export default ScoreBoardHeader

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:10
  },
  labeltext: {
    color: COLOR.Button_color,
    ...TEXT_STYLE.title_bold
  },
  image: {
    width: wp(10),
    height: hp(5),
  }
})