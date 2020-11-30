import React from 'react';
import { Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Theme from '../../../styles/theme.style';

/* Navigation Imports */
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Wallet from '../screens/wallet';

/* Icons */
import { faCoffee, faCogs, faHome, faSnowboarding, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

function Main(props: any) {

    const tabBarOptions: any = {
        activeBackgroundColor: Theme.primary,
        inactiveBackgroundColor: Theme.primary,
        activeTintColor: Theme.black,
        inactiveTintColor: Theme.black,
        showLabel: true,
        style: {
            height: 60,
            backgroundColor: Theme.primary,
            paddingBottom: 5,
            paddingTop: 5
        }
    }


    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Activities" component={Dashboard} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Profile" component={Dashboard} />
            <Tab.Screen name="Settings" component={Dashboard} />
        </Tab.Navigator>

    );
}

function screenOptions({route}: any) {
    return {
        tabBarIcon: ({focused, color, size}: any) => {

            if (route.name === "Dashboard") return <FontAwesomeIcon icon={ faHome } size={22}/>
            if (route.name === "Activities") return <FontAwesomeIcon icon={ faSnowboarding } size={22} />
            if (route.name === "Wallet") return <FontAwesomeIcon icon={ faWallet } size={22}/>
            if (route.name === "Settings") return <FontAwesomeIcon icon={faCogs} size={22}/>
            if (route.name === "Profile") return <FontAwesomeIcon icon={faUserAlt} size={22}/>

            console.log(route.name)
            return <FontAwesomeIcon icon={ faCoffee } />
        }
    }
}

function tabBarIcon({focused, color, size}: any) {
    return <Text>hi</Text>

}

export default Main;

