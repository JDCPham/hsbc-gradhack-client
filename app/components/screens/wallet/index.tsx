import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';

import Theme from '../../../../styles/theme.style';
import ButtonStyle from '../../../../styles/button.style';
import { Button } from 'react-native-paper';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';

import AsyncStorage from '@react-native-async-storage/async-storage';
import currency from 'currency.js';

/* Components */
import Header from '../../common/header';
import TransCard from '../../common/transCard';


function Wallet(props: any) {
    const [balance, setBalance] = React.useState("null");

    // API Call: User Details and Upcoming Activities.
    useEffect(() => {
        AsyncStorage.getItem('email').then(email => {
            if (email != null) getBalance(email, setBalance);
        })
    }, [])

    return (
        <View>
            <View style={{ backgroundColor: Theme.primary }}>
                <SafeAreaView>
                    <Header />
                </SafeAreaView>
            </View>

            <View style={[styles.card, styles.myspace]}>
                <View style={styles.WalletSect}>
                    <Text style={{fontSize: 20,}}>Wallet</Text>
                    <Text style={styles.mybalance}>{currency(balance).format()}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button style={[{ justifyContent: 'center', flex: 1, marginTop: 10, borderRadius: 0}]} color={Theme.black} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14}} mode="contained">Deposit</Button>
                    <Button style={[{ justifyContent: 'center', flex: 1, marginTop: 10, borderRadius: 0}]} color={Theme.primary} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14}} mode="contained">Withdraw</Button>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 20,}}>
                        <Text style={styles.title}>PREVIOUS TRANSACTIONS</Text>
                        <Text style={styles.titleAlt}>💵</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <TransCard 
                    trans={5}
                    date='14/12/18'/>
                <TransCard 
                    trans = {2}
                    date = '11/11/18'
                />
                <TransCard 
                    trans={-2}
                    date='18/11/18'/>
                <TransCard 
                    trans = {-7.3}
                    date = '13/17/20'
                />
                <TransCard 
                    trans={5}
                    date='14/12/18'/>
                <TransCard 
                    trans = {2}
                    date = '11/11/18'
                />
                <TransCard 
                    trans={-2}
                    date='18/11/18'/>
                <TransCard 
                    trans = {-7.3}
                    date = '13/17/20'
                />
            </ScrollView>
        </View>
    )
}

function getBalance(email: any, setBalance: any): void {
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/user-details/${email}`, { method: 'GET' }).then(response => response.json()).then(res => {
        setBalance(res['balance'])
    })
}

const styles = StyleSheet.create({
    myicon: {
        fontSize: 30,
    },
    myspace: {
        margin: 20,
    },
    transText1: {
        fontSize: 20,
        fontWeight: '600',
    },
    transText2: {
        fontSize: 13,
    },
    scrollView: {
        // backgroundColor: Theme.white,
        // paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 80
    },
    card: {
        paddingTop: 20,
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
    mybalance: {
        fontSize: 40,
        fontWeight: '600',
    },
    WalletSect: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Wallet;