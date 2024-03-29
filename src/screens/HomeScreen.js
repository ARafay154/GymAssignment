import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import { COLOR } from '../enums/StyleGuide';
import Banner from '../components/widgets/Banner';
import Bio from '../components/widgets/Bio';
import Details from '../components/widgets/Details';
import WorkOrganization from '../components/widgets/WorkOrganization';
import Summary from '../components/widgets/Summary';
import Tests from '../components/widgets/Tests';
import BestWorkOut from '../components/widgets/BestWorkOut';
import TestNearByMe from '../components/widgets/TestNearByMe';
import Calender from '../components/widgets/Calender';
import Score from '../components/widgets/Score';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Banner />
        <Bio />
        <Details />
        <WorkOrganization />
        <Summary />
        <Tests />
        <BestWorkOut />
        <TestNearByMe />
        <Calender />
        <Score />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    padding: "6%",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});
