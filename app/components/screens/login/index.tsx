import React from 'react';
import { Text, View } from 'react-native';
import Dashboard from '../dashboard';

function Login(props: any) {

    return (
        <View>
            <Text>{props.value}</Text>

            <Dashboard></Dashboard>
        </View>

    );
}

export default Login;