import { faCross, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Theme from '../../../../styles/theme.style';
import SpacingStyle from '../../../../styles/spacing.style';
import InputStyle from '../../../../styles/input.style';

import Header from '../../common/header';
// import MapView, { Marker } from 'react-native-maps';
import moment from 'moment';
import ButtonStyle from '../../../../styles/button.style';
import { Button, TextInput } from 'react-native-paper';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import { InputPaperTheme2 } from '../../../../styles/paper.style';
import currency from 'currency.js';
import AmountSelector from '../../common/amount-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Deposit(props: any) {

    // Hooks
    const [amount, setAmount] = React.useState(5);
    const [isLoading, setIsLoading] = React.useState(false);


    if (isLoading) return (
        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <ActivityIndicator size="large" color={Theme.black}/>
        </View>
    )
    else return (
        <View style={styles.container}>

            <View style={{ backgroundColor: Theme.primary, width: '100%' }}>
                <SafeAreaView>
                    <Header hideLogout={true} />
                </SafeAreaView>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Deposit</Text>
            </View>
            <View style={{ width: '100%' }}>
                <ScrollView style={{ width: '100%', paddingVertical: 30 }}>
                    <AmountSelector amount={amount} setAmount={setAmount} />
                    <View style={styles.inputContainer}>
                        <TextInput label="Name on card" style={[InputStyle.input]} mode="outlined" theme={InputPaperTheme2} />
                        <TextInput label="Card number" style={[InputStyle.input, SpacingStyle.mt1]} mode="outlined" theme={InputPaperTheme2} keyboardType="number-pad" />
                        <TextInput label="Expiry date" style={[InputStyle.input, SpacingStyle.mt1]} mode="outlined" theme={InputPaperTheme2} keyboardType="number-pad" />
                        <TextInput label="Security code" style={[InputStyle.input, SpacingStyle.mt1]} mode="outlined" theme={InputPaperTheme2} keyboardType="number-pad" />
                    </View>
                    <Button icon="creation" onPress={() => deposit(setIsLoading, amount, props)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 40, borderColor: Theme.black, borderWidth: 2, backgroundColor: Theme.black }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained">Deposit</Button>
                    <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.primary, borderWidth: 2, backgroundColor: Theme.primary }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained">Cancel</Button>
                    <View style={{ marginVertical: 100 }}></View>
                </ScrollView>
            </View>

        </View>
    );
}

function deposit(setIsLoading: any, amount: any, props: any): void {

    console.log("Depositing " + amount)

    setIsLoading(true)

    AsyncStorage.getItem('email').then(email => {
        if (email != null) {
            fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/deposit/${email}/${amount}`, { method: 'GET' }).then(response => response.json()).then(res => {
                setIsLoading(false)
                props.setModalVisible(false);
            })
        } else {
            alert("An error occurred.")
            setIsLoading(false);
        }
    }).catch(error => {
        alert("An error occurred.")
        setIsLoading(false)
    })

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
        alignItems: "center",
        width: '100%',
    },
    inputContainer: {
        marginHorizontal: 20,
        marginTop: 30
    },
    title: {
        width: '100%',
        height: 50,
        backgroundColor: Theme.black,
        color: Theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: Theme.primary,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 20
    }
});




export default Deposit;