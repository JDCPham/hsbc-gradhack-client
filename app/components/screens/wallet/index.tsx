import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';

import Theme from '../../../../styles/theme.style';
import Spacing from '../../../../styles/spacing.style';

/* Components */
import Header from '../../common/header';
import Card from '../../common/card';

function Wallet(props: any) {
    return (
        <View>
            <View style={{ backgroundColor: Theme.primary }}>
                <SafeAreaView>
                    <Header />
                </SafeAreaView>
            </View>

            <View style={[styles.card, Spacing.mt1]}>
                <View style={styles.WalletSect}>
                    <Text style={{
                            fontSize: 20,
                            }}>
                        Wallet</Text>
                    <Text style={styles.balance}>$52.50</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>PREVIOUS TRANSACTIONS</Text>
                        <Text style={styles.titleAlt}>💵</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Theme.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 80
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
    balance: {
        fontSize: 40,
        fontWeight: '600',
    },
    WalletSect: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Wallet;