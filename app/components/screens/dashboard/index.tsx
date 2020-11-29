import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';

import Theme from '../../../../styles/theme.style';
import Spacing from '../../../../styles/spacing.style';

/* Components */
import Header from '../../common/header';
import Card from '../../common/card';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Dashboard(props: any) {

    // React Hooks.
    const [name, setName] = React.useState("null");
    const [balance, setBalance] = React.useState("null");
    const [activities, setActivities] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    // API Call: User Details and Upcoming Activities.
    useEffect(() => {
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getData(email, setName, setBalance, setActivities, setIsLoading);
        })
    }, [])
    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Theme.primary }}>
            <ActivityIndicator size="large" color={Theme.black} />
        </View>
    )
    else return (

        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header />
                </SafeAreaView>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <Text style={styles.greetingText}>Welcome back {name}! 👋</Text>
                    <Image source={require('../../../assets/animations/daytime.gif')} style={{ width: 90, height: 80, borderWidth: 0, borderColor: 'blue' }} />
                </View>

                {/* Upcoming Activities */}
                <View style={[Spacing.mt3, Spacing.mb1]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>Upcoming Activities</Text>
                        <Text style={styles.titleAlt}>🚀</Text>
                    </View>

                    {activities.map((activity, i) => {
                        return (
                            <Card
                                key={i}
                                image={activity['Image']}
                                title={activity['Name']}
                                location={activity['Location']}
                                timestamp={activity['Timestamp']}
                                venue={activity['Host']}
                                price={activity['Cost']} />
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );
}


function getData(email: any, setName: any, setBalance: any, setActivities: any, setIsLoading: any): void {
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/user-details/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
        setName(res['firstName'])
        setBalance(res['balance'])

        fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/upcoming-activities/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
            setActivities(res);
            setIsLoading(false);
        })
    })
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Theme.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 80
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.black,
        color: Theme.primary,
        textTransform: 'uppercase'
    },
    titleAlt: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.primary,
        color: Theme.black,
        textTransform: 'uppercase'
    },
    card: {
        padding: 20,
        backgroundColor: Theme.white,
        borderRadius: 5,
        borderLeftColor: Theme.primary,
        borderLeftWidth: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    verticalCard: {
        padding: 20,
        backgroundColor: Theme.white,
        borderRadius: 5,
        borderLeftColor: Theme.primary,
        borderLeftWidth: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    greetingText: {
        fontSize: 24,
        fontWeight: '600',
        width: '60%'
    },
    activitiesText1: {
        fontSize: 21,
        fontWeight: '600',
    },
    activitiesText2: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 2
    },
    activitiesText3: {
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: Theme.black,
        color: Theme.primary,
        paddingVertical: 3,
        paddingHorizontal: 8
    },
    activitiesText4: {
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: Theme.primary,
        color: Theme.black,
        paddingVertical: 3,
        paddingHorizontal: 8
    },
    activitiesText5: {
        fontSize: 14,
        fontWeight: '600',
        borderColor: Theme.primary,
        borderWidth: 2,
        backgroundColor: Theme.white,
        color: Theme.black,
        paddingVertical: 1,
        paddingHorizontal: 8
    },
});

export default Dashboard;