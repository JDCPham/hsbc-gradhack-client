import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator, Modal, RefreshControl } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import currency from 'currency.js';

/* Components */
import Header from '../../common/header';
import TransCard from '../../common/transaction-card';
import WalletCard from '../../common/wallet-card';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import { Button } from 'react-native-paper';
import Deposit from '../../modals/deposit';
import Withdraw from '../../modals/withdraw';





function Wallet(props: any) {

    /* Hooks */
    const [isLoading, setIsLoading] = React.useState(true);
    const [isQuietLoading, setIsQuietLoading] = React.useState(false);
    const [balance, setBalance] = React.useState("null");
    const [transactions, setTransactions] = React.useState([]);
    const [depositModalVisible, setDepositModalVisible] = React.useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = React.useState(false);


    /* Refresh Handler */
    const onRefresh = React.useCallback(() => {
        setIsQuietLoading(true);
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getBalance(email, setBalance, setIsLoading, setTransactions, setIsQuietLoading);
            else setIsQuietLoading(false)
        })
    }, []);

    // API Call: User Details and Upcoming Activities.
    useEffect(() => {
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getBalance(email, setBalance, setIsLoading, setTransactions, setIsQuietLoading);
        })
    }, [])

    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Theme.primary }}>
            <ActivityIndicator size="large" color={Theme.black} />
        </View>
    )
    else return (
        <View>
            <View>
                <Modal animationType="slide" transparent={true} visible={depositModalVisible} children={<Deposit setModalVisible={setDepositModalVisible} onRefresh={onRefresh}/>} />
                <Modal animationType="slide" transparent={true} visible={withdrawModalVisible} children={<Withdraw setModalVisible={setWithdrawModalVisible} onRefresh={onRefresh} />} />
            </View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>

            <ScrollView style={[isQuietLoading ? {opacity: 0.4} : {opacity: 1}]}>
                <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
                <View style={styles.container}>
                {/* { isQuietLoading ? <ActivityIndicator size="large" color={Theme.black} /> : <View></View>} */}
                    <View style={[styles.card]}>
                        <WalletCard balance={balance} setDepositModalVisible={setDepositModalVisible} setWithdrawModalVisible={setWithdrawModalVisible} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 40, }}>
                        <Text style={styles.title}>TRANSACTION HISTORY</Text>
                        <Text style={styles.titleAlt}>💵</Text>
                    </View>

                    {transactions.length > 0 ? <View style={styles.transactionContainer}>
                        {transactions.map((transaction, i) => {
                            return (
                                <TransCard amount={transaction['amount']} timestamp={transaction['timestamp']} reason={transaction['reason']} key={i} />
                            )
                        })}
                    </View> : <View><Text style={styles.muted}>Currently no transactions</Text></View>}


                    <View>
                        <Button icon="shield-alert" style={[ButtonStyle.btn, { justifyContent: 'center', marginTop: 0, flex: 1, }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="contained">Report a transaction</Button>
                    </View>

                    <View style={{ marginVertical: 60 }}></View>
                </View>
            </ScrollView>


        </View>
    )
}

function getBalance(email: any, setBalance: any, setIsLoading: any, setTransactions: any, setIsQuietLoading: any): void {
    console.log(email)
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/user-details/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
        console.log(res)
        setBalance(res['balance'])
        fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/transactions/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
            setTransactions(res.reverse())
            setIsLoading(false)
            setIsQuietLoading(false)
            console.log(res)
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
    container: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    transactionContainer: {
        paddingVertical: 20
    },
    card: {
        backgroundColor: Theme.white,
        borderRadius: 5,
        borderLeftColor: Theme.primary,
        borderLeftWidth: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10
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

});

export default Wallet;