import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator, Modal, Button, TouchableHighlight, TouchableOpacity, RefreshControl } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';

import Theme from '../../../../styles/theme.style';
import Spacing from '../../../../styles/spacing.style';

/* Components */
import Header from '../../common/header';
import Card from '../../common/card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpcomingPhysicalActivity from '../../modals/upcoming/physical';
import Wallet from '../wallet';
import WalletCard from '../../common/wallet-card';
import Deposit from '../../modals/deposit';
import Withdraw from '../../modals/withdraw';

function Dashboard(props: any) {

    // React Hooks.
    const [modalVisible, setModalVisible] = React.useState(false);
    const [depositModalVisible, setDepositModalVisible] = React.useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = React.useState(false);
    const [currentActivity, setCurrentActivity] = React.useState(null);
    const [name, setName] = React.useState("null");
    const [balance, setBalance] = React.useState("null");
    const [activities, setActivities] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isQuietLoading, setIsQuietLoading] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setIsQuietLoading(true);
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getData(email, setName, setBalance, setActivities, setIsLoading, setIsQuietLoading);
            else setIsQuietLoading(false)
        })
    }, []);


    // API Call: User Details and Upcoming Activities.
    useEffect(() => {
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getData(email, setName, setBalance, setActivities, setIsLoading, setIsQuietLoading);
        })
    }, [])
    if (isLoading === true) return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Theme.primary }}>
            <ActivityIndicator size="large" color={Theme.black} />
        </View>
    )
    else return (

        <View>
            <View>
                <Modal animationType="slide" transparent={true} visible={modalVisible} children={<UpcomingPhysicalActivity setModalVisible={setModalVisible} activity={currentActivity} onRefresh={onRefresh} />} />
                <Modal animationType="slide" transparent={true} visible={depositModalVisible} children={<Deposit setModalVisible={setDepositModalVisible} onRefresh={onRefresh} />} />
                <Modal animationType="slide" transparent={true} visible={withdrawModalVisible} children={<Withdraw setModalVisible={setWithdrawModalVisible} onRefresh={onRefresh} />} />
            </View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>
            <ScrollView style={[styles.scrollView, isQuietLoading ? {opacity: 0.4} : {opacity: 1}]}>
                <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={styles.card}>
                        <Text style={styles.greetingText}>Welcome back {name}! 👋</Text>
                        <Image source={require('../../../assets/animations/daytime.gif')} style={{ width: 90, height: 80, borderWidth: 0, borderColor: 'blue' }} />
                    </View>
                    <View style={[styles.card, Spacing.mt1, { width: '100%', paddingBottom: 0, paddingHorizontal: 0 }]}>
                        <WalletCard hideIcon={true} balance={balance} setDepositModalVisible={setDepositModalVisible} setWithdrawModalVisible={setWithdrawModalVisible} />
                    </View>
                    <View style={[Spacing.mt3, Spacing.mb1]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>My Activities</Text>
                            <Text style={styles.titleAlt}>🚀</Text>
                        </View>

                        {activities.length <= 0 ? <View><Text style={styles.muted}>Currently no activities</Text></View> : <View></View>}

                        {activities.map((activity, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={() => {
                                    setCurrentActivity(activity['Identifier']);
                                    setModalVisible(true);
                                }}>
                                    <Card

                                        image={activity['Image']}
                                        title={activity['Name']}
                                        location={activity['Location']}
                                        timestamp={activity['Timestamp']}
                                        venue={activity['Host']}
                                        price={activity['Cost']} />
                                </TouchableOpacity>
                            )
                        })}

                    </View>

                    <View style={{ marginVertical: 10 }}></View>
                </View>
            </ScrollView>
        </View>
    );
}


function getData(email: any, setName: any, setBalance: any, setActivities: any, setIsLoading: any, setIsQuietLoading: any): void {
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/user-details/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
        setName(res['firstName'])
        setBalance(res['balance'])

        fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/upcoming-activities/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
            setActivities(res);
            console.log(res)
            setIsQuietLoading(false);
            setIsLoading(false);
        })
    })
}


const styles = StyleSheet.create({
    muted: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 50,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        color: '#888'
    },
    scrollView: {
        backgroundColor: Theme.white,
        // paddingHorizontal: 20,
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
    modal: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'blue'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Dashboard;