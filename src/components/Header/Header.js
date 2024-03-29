import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import BackArrow from '../../assets/svg/backarrow.svg'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import { TEXT_STYLE } from '../../enums/StyleGuide'
import Picture from '../widgets/Picture'
import Label from '../widgets/Label'


const Header = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <BackArrow width={25} height={25} />
      </TouchableOpacity>

      <Label text={"Home"} textStyle={styles.labeltext} />

      <TouchableOpacity>
        <Picture source={require('../../assets/images/Profile_Image.png')} style={styles.image} />
      </TouchableOpacity>

    </View>
  )
}

export default Header

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