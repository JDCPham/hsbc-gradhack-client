import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Linking } from 'react-native';

/* Components */
import Header from '../../../common/header';

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';
import {OutlinedButtonPaperTheme} from '../../../../../styles/paper.style';

function ActivityHistory(props: any) {
    // Get Naviation Object.
    const navigation = props.navigation;

    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>
            <ScrollView style={[styles.Container]}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>Gig Economy Tutorial</Text>
                    <Text style={[styles.title, {backgroundColor: Theme.primary}]}>🎓</Text>
                </View>
                <Text style={[styles.secTitle]}>See Detail</Text>
                <View style={[styles.card]}>
                    <Text style={[styles.sugText]}>
                        Suggestions from RESEARCH
                    </Text>
                </View>
                <Text style={[styles.secTitle]}>Other Sources</Text>
                    <Button style={[styles.mybtn, {marginBottom: 20, backgroundColor: Theme.black}]} labelStyle={{color: Theme.primary, fontSize: 16,}} mode="contained" uppercase={false} onPress={() => Linking.openURL('https://www.hsbc.com.cn/')}>HSBC Website</Button>
                    <Button style={[styles.mybtn, {marginBottom: 20, backgroundColor: Theme.black}]} labelStyle={{color: Theme.primary, fontSize: 16,}} mode="contained" uppercase={false} onPress={() => Linking.openURL('https://www.hsbc.com.cn/')}>HSBC Website</Button>
                    <Button style={[styles.mybtn, {marginBottom: 20, backgroundColor: Theme.black}]} labelStyle={{color: Theme.primary, fontSize: 16,}} mode="contained" uppercase={false} onPress={() => Linking.openURL('https://www.hsbc.com.cn/')}>HSBC Website</Button>
                    <Button style={[styles.mybtn, {backgroundColor: Theme.black}]} labelStyle={{color: Theme.primary, fontSize: 16,}} mode="contained" uppercase={false} onPress={() => Linking.openURL('https://www.hsbc.com.cn/')}>HSBC Website</Button>
                <View style={[styles.btnContainer]}>
                    <Button style={[styles.mybtn, {backgroundColor: Theme.primary}]} labelStyle={{color: Theme.black, fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('final')}>Next</Button>
                    <Button style={[styles.mybtn, {marginTop: 20, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="outlined" onPress={() => navigation.navigate('dashboard')}>Cancel</Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.black,
        color: Theme.primary,
        // textTransform: 'uppercase'
    },
    secTitle: {
        backgroundColor: Theme.primary, 
        fontSize: 18,
        width: '50%',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '500',
    },
    card: {
        width: '100%',
        backgroundColor: Theme.white,
        borderRadius: 5,
        borderLeftColor: Theme.primary,
        borderLeftWidth: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        height: 400,
    },
    sugText: {
        fontSize: 16,
    },
    btnContainer: {
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    mybtn: {
        width: '50%',
        // backgroundColor: Theme.primary,
        height: 40,
    }
})

export default ActivityHistory;