import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import currency from 'currency.js';
import { Button } from 'react-native-paper';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';



function WalletCard(props: any) {

    let hideIcon: boolean = props.hideIcon == null ? false : props.hideIcon;

    return (
        <View style={styles.container}>
            {hideIcon ? <View></View> : <Image source={require('../../../assets/animations/wallet.gif')} style={styles.image}/>}
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.balance}>{currency(props.balance).format()}</Text>
            <View style={styles.buttonContainer}>
                <Button icon="login" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, height: 40 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => props.setDepositModalVisible(true)}>Deposit</Button>
                <Button icon="login" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, backgroundColor: Theme.primary, height: 40, borderBottomRightRadius: 8 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => props.setWithdrawModalVisible(true)}>Withdraw</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginBottom: 20,
        marginTop: 15
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    balance: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 5
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20
    }
})

export default WalletCard;