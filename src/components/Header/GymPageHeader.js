import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackArrow from '../../assets/svg/backarrow.svg';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import { TEXT_STYLE } from '../../enums/StyleGuide';
import Picture from '../widgets/Picture';
import Label from '../widgets/Label';
import Search from '../../assets/svg/tabSearchicon.svg';
import Setting from '../../assets/svg/setting.svg'

const GymPageHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BackArrow width={25} height={25} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Andrew |"
          placeholderTextColor={COLOR['_#BFBFBF']}
        />
        <TouchableOpacity>
          <Search width={24} height={24} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Setting  width={28} height={28} />
      </TouchableOpacity>


      <TouchableOpacity>
        <Picture source={require('../../assets/images/Test_img.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default GymPageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    width: '65%',
    height: hp(5),
    paddingHorizontal: '3%',
    borderRadius: 20
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10
  },
  image: {
    width: wp(8),
    height: hp(4),
  }
});
