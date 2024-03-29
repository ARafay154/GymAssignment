import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { COLOR, FONT, height, hp, width, wp } from '../../enums/StyleGuide';
import Label from './Label';
import Picture from './Picture';
import Edit from '../../assets/svg/edit.svg'
import Direction from "../../assets/svg/direction.svg"

const WorkOrganization = () => {
  return (
    <View style={styles.container}>
      <Label text={"Work / Organizations"} textStyle={styles.heading} />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <View style={styles.block}>
            <Picture source={require('../../assets/images/organization_image.png')} style={styles.image} />
          </View>
          <View>
            <Label text={"Work / Organizations"} textStyle={styles.subheading} />
            <Label text={"June 16, 2022 - Present"} textStyle={styles.text} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 3 }}>
              <Direction width={12} height={12} style={{ marginRight: 3, }} />
              <Label text={"New York, USA"} textStyle={styles.text} />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity >
            <Edit width={18} height={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        
        <View style={styles.leftContainer}>

          <View style={styles.block}>
            <Picture source={require('../../assets/images/organization_image.png')} style={styles.image} />
          </View>

          <View>
            <Label text={"Work / Organizations"} textStyle={styles.subheading} />
            <Label text={"June 16, 2022 - Present"} textStyle={styles.text} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 3 }}>
              <Direction width={12} height={12} style={{ marginRight: 3, }} />
              <Label text={"New York, USA"} textStyle={styles.text} />
            </View>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity >
            <Edit width={18} height={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>

        <View style={styles.leftContainer}>

          <View style={styles.block}>
            <Picture source={require('../../assets/images/organization_image.png')} style={styles.image} />
          </View>

          <View>
            <Label text={"Work / Organizations"} textStyle={styles.subheading} />

            <Label text={"June 16, 2022 - Present"} textStyle={styles.text} />

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 3 }}>
              <Direction width={12} height={12} style={{ marginRight: 3, }} />
              <Label text={"New York, USA"} textStyle={styles.text} />
            </View>

          </View>

        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity >
            <Edit width={18} height={18} />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default WorkOrganization;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOR.Widget_background,
    marginTop: "3%",
    borderRadius: 12
  },
  heading: {
    fontSize: 18,
    fontFamily: FONT.Murecho_Bold,
    marginBottom: 10,
    color: COLOR.white
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: "3%"
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  image: {
    width: wp((60 / width) * 100),
    height: hp((60 / height) * 100),
    marginRight: 10,
  },
  subheading: {
    fontFamily: FONT.Murecho_Bold,
    fontSize: 14,
    color: COLOR.white
  },
  text: {
    color: COLOR.text_color,
    fontFamily: FONT.Murecho_Regular,
    fontSize: 12
  }
});


