import React from 'react';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Component Imports */
import Login from './app/components/screens/login';
import Main from './app/components/main';

/* Import Contexts */
import Context from './app/contexts'

/* Navigation Stack */
const Stack = createStackNavigator();

/* Component */
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}



