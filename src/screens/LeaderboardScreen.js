import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLOR, hp, wp } from '../enums/StyleGuide'
import GymPageHeader from '../components/Header/GymPageHeader'
import Picture from '../components/widgets/Picture'
import GymIcon from '../assets/svg/gymIcon.svg'
import GymProfile from '../components/widgets/GymProfile'
import GymDetails from '../components/widgets/GymDetails'
import GymPost from '../components/widgets/GymPost'

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <GymPageHeader />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

        <View style={styles.imageContainer}>
          <Picture source={require('../assets/images/Gym_Banner.png')} style={styles.image} />
          <View style={styles.gymIconContainer}>
            <GymIcon width={75} height={75} style={styles.gymIcon} />
          </View>
        </View>

        <GymProfile />
        <GymDetails />
        <GymPost />
      </ScrollView>
    </View>
  )
}

export default LeaderboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    padding: wp(6),
  },
  scrollViewContainer: {
    flexGrow: 1,
    marginBottom: hp(5)
  },
  imageContainer: {
    marginVertical: hp(5),
    position: 'relative'
  },
  image: {
    width: "100%",
    height: hp(22),
    borderRadius: 12,
    resizeMode: 'cover',
  },
  gymIconContainer: {
    width: wp(30),
    height: hp(15),
    borderRadius: 100,
    backgroundColor: COLOR['_#D9D9D9'],
    position: 'absolute',
    bottom: -60,
    left: wp(6)
  },
  gymIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
})

