import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacing from '../../../../styles/spacing.style';
import Theme from '../../../../styles/theme.style';
import moment from 'moment';
import currency from 'currency.js';

function AmountSelector(props: any) {

    

    function decrease() {
        if (props.amount <= 1) return;
        props.setAmount(props.amount - 1);
    }

    function increase() {
        if (props.amount > 1000) return;
        props.setAmount(props.amount + 1);
    }

    console.log("apple")


    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => decrease()}>
                <View style={styles.valueButton}>
                    <Text style={styles.valueButtonText}>-</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.value}>
                <Text style={styles.valueText}>{currency(props.amount).format()}</Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => increase()}>
                <View style={styles.valueButton}>
                <Text style={styles.valueButtonText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    value: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.primary,
    },
    valueText: {
        fontSize: 24,
        fontWeight: '600',
        backgroundColor: Theme.primary,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    valueButton: {
        height: 100,
        width: '100%',
        backgroundColor: Theme.black,
        borderWidth: 5,
        borderColor: Theme.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueButtonText: {
        fontSize: 74,
        marginTop: -8,
        fontWeight: '700',
        color: Theme.primary
    }
});


export default AmountSelector;