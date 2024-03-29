import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN } from '../enums/AppEnums';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SearchScreen from '../screens/SearchScreen';
import MenuScreen from '../screens/MenuScreen';
import { COLOR, hp } from '../enums/StyleGuide';

import Home from '../assets/svg/tabHomeIcon.svg'
import Leader from '../assets/svg/tabLeaderIcon.svg'
import Bell from '../assets/svg/tabLeaderIcon.svg'
import Find from '../assets/svg/tabLeaderIcon.svg'
import Menu from '../assets/svg/tabMenuIcon.svg'


const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();

    const CustomTabBar = ({ state, descriptors, navigation }) => {
        return (
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    // Define your SVG icon components for each tab
                    let icon;
                    switch (route.name) {
                        case SCREEN.HOME:
                            icon = <Home  name="Home"/>;
                            break;
                        case SCREEN.LEADER_BOARD:
                            icon = <Leader name="leader-board" />;
                            break;
                        case SCREEN.NOTIFICATION:
                            icon = <Bell name="Sotification" />;
                            break;
                        case SCREEN.SEARCH:
                            icon = <Find name="Search" />;
                            break;
                        case SCREEN.MENU:
                            icon = <Menu name="Menu" />;
                            break;
                        default:
                            icon = null;
                    }

                    const isFocused = state.index === index;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                            style={[styles.tabItem, isFocused && styles.tabItemFocused]}
                        >
                            {icon}
                            <Text style={styles.tabLabel}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={props => <CustomTabBar {...props} />}
                screenOptions={{
                    headerShown: false // Hide the header
                }}
            >
                <Tab.Screen name={SCREEN.HOME} component={HomeScreen} />
                <Tab.Screen name={SCREEN.LEADER_BOARD} component={LeaderboardScreen} />
                <Tab.Screen name={SCREEN.NOTIFICATION} component={NotificationScreen} />
                <Tab.Screen name={SCREEN.SEARCH} component={SearchScreen} />
                <Tab.Screen name={SCREEN.MENU} component={MenuScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: hp(8),
        backgroundColor: COLOR.Tab_Color,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemFocused: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Change the background color when tab is focused
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
        color: 'white', // Change the color of the tab label
    },
});
