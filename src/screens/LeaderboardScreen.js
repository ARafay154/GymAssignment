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

        <View style={{ marginVertical: '5%' }}>
          <Picture source={require('../assets/images/Gym_Banner.png')} style={styles.image} />
          <View style={{ width: wp(30), height: hp(15), borderRadius: 100, backgroundColor: COLOR['_#D9D9D9'], position: 'absolute', bottom: -60, left: 15 }}>
            <GymIcon width={75} height={75} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
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
    padding: "6%",
  },
  scrollViewContainer: {
    flexGrow: 1,
    marginBottom:'5%'
  },
  image: {
    width: "100%",
    height: hp(22),
    borderRadius: 12,
    resizeMode: 'cover',
    position: 'relative',

  },
})