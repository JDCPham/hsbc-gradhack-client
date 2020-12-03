import React, { useEffect } from 'react';

/* Navigation Imports */
import { createStackNavigator } from "@react-navigation/stack";
import ActivityDetail from "./activity-detail";
import ActivityHistory from "./activity-history";
import ActivitySuggestion from "./activity-suggestion";
import ActivityFinal from "./activity-final";
import Dashboard from "../dashboard";


const Stack = createStackNavigator();

function CreateActivity(props: any) {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="detail">
            <Stack.Screen name="dashboard" component={Dashboard} />
            <Stack.Screen name="detail" component={ActivityDetail} />
            <Stack.Screen name="history" component={ActivityHistory} />
            <Stack.Screen name="suggestion" component={ActivitySuggestion} />
            <Stack.Screen name="final" component={ActivityFinal} />
        </Stack.Navigator>
    );
}

export default CreateActivity;