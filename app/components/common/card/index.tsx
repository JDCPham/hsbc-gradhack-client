import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Spacing from '../../../../styles/spacing.style';
import Theme from '../../../../styles/theme.style';
import moment from 'moment';
import currency from 'currency.js';

function Card(props: any) {
    
    return (
        <View style={[styles.verticalCard, Spacing.mt1, { padding: 0 }]}>
            <Image source={{uri: props.image}} style={{ width: '100%', height: 160 }} />
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.activitiesText1]}>{props.title}</Text>
                    <Text style={[styles.activitiesText2]}>{props.location}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={[styles.activitiesText3, { marginRight: 5 }]}>{moment(props.timestamp).format("DD/MM | HH:mm")}</Text>
                        <Text style={[styles.activitiesText4, { marginRight: 5 }]}>{props.venue}</Text>
                        <Text style={[styles.activitiesText5, { marginRight: 5 }]}>{props.price == 0 ? "FREE" : currency(props.price).format()}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
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


export default Card;