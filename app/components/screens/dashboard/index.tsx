import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';

import Theme from '../../../../styles/theme.style';
import Spacing from '../../../../styles/spacing.style';

/* Components */
import Header from '../../common/header';

function Dashboard(props: any) {

    return (

        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header />
                </SafeAreaView>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <Text style={styles.greetingText}>Welcome back Kevin! 🚀</Text>
                    <Image source={require('../../../assets/animations/daytime.gif')} style={{ width: 90, height: 80, borderWidth: 0, borderColor: 'blue' }} />
                </View>

                {/* Upcoming Activities */}
                <View style={[Spacing.mt3, Spacing.mb1]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>Upcoming Activities</Text>
                        <Text style={styles.titleAlt}>🚀</Text>
                    </View>
                    <View style={[styles.verticalCard, Spacing.mt1, { padding: 0 }]}>
                        <Image source={require('../../../assets/animations/cookingClass.jpg')} style={{ width: '100%', height: 160 }} />
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={[styles.activitiesText1]}>Dumpling Cooking Class</Text>
                                <Text style={[styles.activitiesText2]}>Queen Elizabeth Olympic Park</Text>
                                <View style={{flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={[styles.activitiesText3, {marginRight: 5}]}>19:00</Text>
                                    <Text style={[styles.activitiesText4, {marginRight: 5}]}>Rosetta's</Text>
                                    <Text style={[styles.activitiesText5, {marginRight: 5}]}>FREE</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={[styles.verticalCard, Spacing.mt1, { padding: 0 }]}>
                        <Image source={require('../../../assets/animations/spinClass.jpg')} style={{ width: '100%', height: 160 }} />
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={[styles.activitiesText1]}>Spin Class</Text>
                                <Text style={[styles.activitiesText2]}>Queen Elizabeth Olympic Park</Text>
                                <View style={{flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={[styles.activitiesText3, {marginRight: 5}]}>21:30</Text>
                                    <Text style={[styles.activitiesText4, {marginRight: 5}]}>F21</Text>
                                    <Text style={[styles.activitiesText5, {marginRight: 5}]}>£20.00</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
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

export default Dashboard;