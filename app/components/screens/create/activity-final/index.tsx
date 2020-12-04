import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

/* Components */
import Header from '../../../common/header';

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';
import ButtonStyle from '../../../../../styles/button.style';
import { ContainedButtonPaperTheme, OutlinedButtonPaperTheme } from '../../../../../styles/paper.style';

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
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>🎉</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Congratulations</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        Your event has been created!
                    </Text>
                </View>
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>🧐</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>What now?</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        Your event is now being reviewed by a member of team. A background check will be performed on you to ensure the safety of our customers. You will be notified once the event goes live on our platform!
                    </Text>
                </View>
                <View style={[styles.btnContainer]}>
                    <Button style={[ButtonStyle.btn, { justifyContent: 'center', width: '100%', flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('dashboard')}>Back to dashboard</Button>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: Theme.gray, marginTop: 10 }}>A product from</Text>
                    <Image style={styles.hsbc} source={require('../../../../assets/animations/hsbc.png')} />
                </View>
                <Text style={{ textAlign: 'center', color: Theme.gray, marginTop: 40 }}>Privacy Policy | Terms & Conditions | Cookie Policy</Text>
                <View style={{marginVertical: 60}}></View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    mybtn: {
        width: '60%',
        backgroundColor: Theme.primary,
        height: 40,
    },
    Container: {
        width: '100%',
        alignSelf: 'center',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    hsbc: {
        width: 110,
        marginTop: 10,
        alignSelf: 'center',
        height: 20
    },
    textContainer: {
        height: 75,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
    },
    activityContainer: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        top: 50,
        marginBottom: 50,
    },
    actDetContainer: {
        height: 50,
        width: 150,
        backgroundColor: '#F4CC33',
        alignItems: 'center',
        justifyContent: 'center',
        top: 130,
        elevation: 10,
    },
    card: {
        width: '100%',
        backgroundColor: Theme.white,
        borderRadius: 5,
        borderLeftColor: Theme.primary,
        borderLeftWidth: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10,
        padding: 20
    },
})

export default ActivityHistory;