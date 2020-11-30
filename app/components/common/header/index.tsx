import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import Theme from '../../../../styles/theme.style';

function Header(props: any) {

    let hide: boolean = false;

    try {
        if (props.hideLogout) hide = true;
    } catch (e) {}

    if (!hide) return (
        <View style={styles.container}>
            <Text style={styles.flex}></Text>
            <Text style={styles.title}>MAJYK</Text>
            <View style={[styles.flex, { alignItems: 'flex-end' }]}>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem('email').then(() => props.navigation.navigate("Login"));
                }
                }>
                    <FontAwesomeIcon icon={faSignOutAlt} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
    else return (
        <View style={styles.container}>
        <Text style={styles.flex}></Text>
        <Text style={styles.title}>MAJYK</Text>
        <View style={[styles.flex, { alignItems: 'flex-end' }]}></View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        letterSpacing: 5,
        textAlign: 'center',
        flex: 1
    },
    flex: {
        flex: 1
    }
});

export default Header;