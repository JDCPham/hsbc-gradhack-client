import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../../../../styles/theme.style';
import currency from 'currency.js';

function TransCard(props: any) {
    return (
        <View style={[styles.card, styles.myspace, {flexDirection: 'row', padding: 15, justifyContent: 'space-between'}]}>
            <View style={{flexDirection: 'column'}}>
                <Text style={[styles.transText1]}>{props.trans > 0 ? '+' : ''}{currency(props.trans).format()}</Text>
                <Text style={[styles.transText2]}>{props.date}</Text>
            </View>
            <Text style={[styles.myicon]}>{props.trans > 0 ? '🔺' : '🔻'}</Text>
        </View>
    );
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
});

export default TransCard;