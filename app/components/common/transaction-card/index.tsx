import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../../../../styles/theme.style';
import currency from 'currency.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleDown, faArrowCircleUp, faCross, faUpload } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function TransCard(props: any) {
    return (
        <View style={[styles.card, { flexDirection: 'column' }]}>

            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={[styles.detailContainer, { flexDirection: 'column' }]}>
                    <Text style={[styles.amount]}>{props.amount > 0 ? '+' : ''}{currency(props.amount).format()}</Text>
                    <Text style={[styles.timestamp]}>{moment(props.timestamp).format("ddd Do MMM YYYY HH:mm A")}</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingRight: 15 }}>
                    {props.amount > 0 ? <FontAwesomeIcon icon={faArrowCircleUp} size={26} color="green" /> : <FontAwesomeIcon icon={faArrowCircleDown} color="red" size={26} />}
                </View>
            </View>

            <Text style={[styles.reason]}>{props.reason}</Text>

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
    detailContainer: {
        paddingLeft: 15
    },
    amount: {
        fontSize: 26,
        fontWeight: '700',
    },
    timestamp: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3
    },
    reason: {
        marginTop: 15,
        backgroundColor: Theme.primary,
        paddingHorizontal: 15,
        paddingVertical: 4,
        fontWeight: '600',
        fontSize: 16
    },
    card: {
        paddingTop: 15,
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