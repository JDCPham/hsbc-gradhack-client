import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';

/* Components */
import Header from '../../../common/header';

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';
import { ContainedButtonPaperTheme, OutlinedButtonPaperTheme } from '../../../../../styles/paper.style';
import ButtonStyle from '../../../../../styles/button.style';

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
                <View style={[styles.plotContainer]}>
                    <Text> Here is the forecasting plot</Text>
                </View>
                <View style={[styles.plotContainer]}>
                    <Text> Here is the map plot</Text>
                </View>
                <View style={[styles.card]}>
                    <Text style={[styles.detail]}>Local Population:</Text>
                    <Text style={[styles.detail]}>9.3m</Text>
                </View>
                <View style={[styles.card]}>
                    <Text style={[styles.detail]}>No. Recent Similar Activities:</Text>
                    <Text style={[styles.detail]}>6</Text>
                </View>
                <View style={[styles.card]}>
                    <Text style={[styles.detail]}>Expected Show Up People:</Text>
                    <Text style={[styles.detail]}>79</Text>
                </View>
                <View style={[styles.btnContainer]}>
                    <Button style={[ButtonStyle.btn, { justifyContent: 'center', width: '100%', flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('suggestion')}>Next</Button>
                    <Button style={[ButtonStyle.btn, { width:'100%', justifyContent: 'center', flex: 1, marginTop: 10, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => navigation.navigate('dashboard')}>Cancel</Button>
                </View>
                <View style={{marginVertical: 30}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },
    plotContainer: {
        padding: 20,
        backgroundColor: Theme.white,
        borderRadius: 5,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10,
        height: 300,
    },
    mapContainer: {
        marginTop: 20,
        backgroundColor: Theme.primary,
        height: 200,
        width: '100%',
    },
    card: {
        width: '80%',
        alignSelf: 'center',
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
        padding: 10,
    },
    detail: {
        fontSize: 20,
    },
    btnContainer: {
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
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