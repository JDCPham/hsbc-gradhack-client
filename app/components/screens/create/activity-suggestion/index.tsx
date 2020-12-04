import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Linking, Image, Alert } from 'react-native';

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

    function showTextCOVID19() {
        return <View>
            <Text style={[styles.sugText, {marginTop: 20, marginBottom: 10, textAlign: 'center'}]}>
                Bounce Back Loan Scheme
            {'\n'}
            The Bounce Back Loan Scheme (BBLS) is designed to support small and medium-sized businesses who have been affected by coronavirus (COVID-19).
            {'\n'}
            The Government guarantees 100% of the loan.
            </Text>
            <Image style={styles.logo} source={require('../../../../assets/animations/hsbc2.jpg')} />
        </View>
    }
    const showTextCOVID19Compo = showTextCOVID19();

    function showTextDigital() {
        return <View>
            <Text style={[styles.sugText, {marginTop: 20, marginBottom: 10, textAlign: 'center'}]}>
                About Payroll Software Integration:
                {'\n'}
                For HK users, call +852 2583 8033 to learn more about HSBC MPF
                {'\n'}
                Customers can enjoy a 6-month free trial.
            </Text>
            <Image style={styles.logo} source={require('../../../../assets/animations/hsbc2.jpg')} />
        </View>
    }
    const showTextDigitalCompo = showTextDigital();

    // You can use a state to control wether the component is showing or not
    const [showCOVID19, setShowCOVID19] = React.useState(false); // By default won't show
    const [showDigital, setShowDigital] = React.useState(false); // By default won't show

    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>
            <ScrollView style={[styles.Container]}>
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>🤝</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>How we can help</Text>

                </View>
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>🦠</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>COVID-19</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        We understand the impacts of the Covid-19 pandemic on your business. Take a moment to look through our helpful resources and pandemic relief packages and.
                    </Text>
                    <Image style={[styles.ImageContainer]} source={require('../../../../assets/businesses/emp-law.jpg')} />
                    <View>
                        <Button style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, borderColor: '#111', borderWidth: 2, marginTop: 20 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => { showCOVID19 == true ? setShowCOVID19(false) : setShowCOVID19(true) }}>Learn more</Button>
                    </View>
                    {showCOVID19 ? showTextCOVID19Compo : null}
                </View>
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>📱</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Digitisation</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        We can help digitalise your business. Check out our cloud-based finance services with supported functions such as payroll management.
                    </Text>
                    <Image style={[styles.ImageContainer]} source={require('../../../../assets/businesses/bounce-back-loan-scheme.jpg')} />
                    <View>
                        <Button style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, borderColor: '#111', borderWidth: 2, marginTop: 20 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => { showDigital == true ? setShowDigital(false) : setShowDigital(true) }}>Learn more</Button>
                    </View>
                    {showDigital ? showTextDigitalCompo : null}
                </View>
                <View style={[styles.card]}>
                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: -10 }}>🤔</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Find out more</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        To learn more about our services, please go to HSBC website.
                    </Text>
                    <View>
                        <Button style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, borderColor: '#111', borderWidth: 2, marginTop: 20 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" >Go to HSBC Website</Button>
                    </View>
                </View>
                <View style={[styles.btnContainer]}>
                    <Button style={[ButtonStyle.btn, { justifyContent: 'center', width: '100%', flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('final')}>Finish</Button>
                    <Button style={[ButtonStyle.btn, { width: '100%', justifyContent: 'center', flex: 1, marginTop: 10, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => navigation.navigate('dashboard')}>Cancel</Button>
                </View>
                <View style={{ marginVertical: 60 }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        marginTop: 10,
        alignSelf: 'flex-end',
        height: 50,
        resizeMode: 'contain',
    },
    Container: {
        width: '100%',
        alignSelf: 'center',
        padding: 20,
    },
    ImageContainer: {
        width: '100%',
        height: 160,
        marginTop: 20,
        // padding: 10,
        alignSelf: 'flex-end',
        resizeMode: 'cover',
        borderWidth: 5,
        borderColor: Theme.primary
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
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        // height: 400,
    },
    sugText: {
        fontSize: 16,
    },
    btnContainer: {
        width: '100%',
        // paddingHorizontal: 20,
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