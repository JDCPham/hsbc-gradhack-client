import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Theme from '../../../../styles/theme.style';

function Header(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MAJYK</Text>
        </View>
    );
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
        letterSpacing: 5
    }
});

export default Header;