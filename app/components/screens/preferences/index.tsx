import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator, Modal, RefreshControl, TouchableOpacity } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import currency from 'currency.js';

/* Components */
import Header from '../../common/header';
import TransCard from '../../common/transaction-card';
import WalletCard from '../../common/wallet-card';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import { Button, RadioButton } from 'react-native-paper';
import Deposit from '../../modals/deposit';
import Withdraw from '../../modals/withdraw';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';


function Preferences(props: any) {

    /* Hooks */
    const [isLoading, setIsLoading] = React.useState(true);
    const [preferences, setPreferences] = React.useState({
        food: true,
        music: false,
        film: false,
        theatre: true,
        sports: true,
        travel: true,
        comedy: true,
        culture: false,
        literature: false,
        history: false,
        lgbt: true,
        virtual: true
    })

    console.log(preferences)


    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>

            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.card]}>
                        <Image source={require('../../../assets/animations/settings.gif')} style={styles.image} />
                    </View>
                    <View style={[styles.preferenceContainer, SpacingStyle.mt2]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["food"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "food")}>
                            <Text style={[styles.preferenceCardText]}>Food</Text>
                            {preferences['food'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["music"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "music")}>
                            <Text style={[styles.preferenceCardText]}>Music</Text>
                            {preferences['music'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.preferenceContainer]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["film"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "film")}>
                            <Text style={[styles.preferenceCardText]}>Film</Text>
                            {preferences['film'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["theatre"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "theatre")}>
                            <Text style={[styles.preferenceCardText]}>Theatre</Text>
                            {preferences['theatre'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.preferenceContainer]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["sports"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "sports")}>
                            <Text style={[styles.preferenceCardText]}>Sports</Text>
                            {preferences['sports'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["travel"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "travel")}>
                            <Text style={[styles.preferenceCardText]}>Travel</Text>
                            {preferences['travel'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.preferenceContainer]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["comedy"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "comedy")}>
                            <Text style={[styles.preferenceCardText]}>Comedy</Text>
                            {preferences['comedy'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["culture"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "culture")}>
                            <Text style={[styles.preferenceCardText]}>Culture</Text>
                            {preferences['culture'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.preferenceContainer]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["literature"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "literature")}>
                            <Text style={[styles.preferenceCardText]}>Literature</Text>
                            {preferences['literature'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["history"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "history")}>
                            <Text style={[styles.preferenceCardText]}>History</Text>
                            {preferences['history'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.preferenceContainer]}>
                        <TouchableOpacity style={[styles.preferenceCard, SpacingStyle.mr1, preferences["lgbt"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "lgbt")}>
                            <Text style={[styles.preferenceCardText]}>LGBT+</Text>
                            {preferences['lgbt'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.preferenceCard, preferences["virtual"] ? styles.borderTopOn : styles.borderTopOff]} onPress={() => preferenceSet(preferences, setPreferences, "virtual")}>
                            <Text style={[styles.preferenceCardText]}>Virtual</Text>
                            {preferences['virtual'] ? <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCheckCircle} size={22} color={Theme.primary}></FontAwesomeIcon></View> : <View style={{alignItems: 'flex-end'}}><FontAwesomeIcon icon={faCircle} size={22} color={Theme.gray}></FontAwesomeIcon></View> }
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Button icon="shield-alert" style={[ButtonStyle.btn, { justifyContent: 'center', marginTop: 30, flex: 1, }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="contained">Save preferences</Button>
                    </View>
                    
                    <View style={{ marginVertical: 60 }}></View>
                </View>
            </ScrollView>
        </View>
    );
}


function preferenceSet(preferences: any, setPreferences: any, key: any): void {

    let newPreferences: any = {
        food: preferences.food,
        music: preferences.music,
        film: preferences.film,
        theatre: preferences.theatre,
        sports: preferences.sports,
        travel: preferences.travel,
        comedy: preferences.comedy,
        culture: preferences.culture,
        literature: preferences.literature,
        history: preferences.history,
        lgbt: preferences.lgbt,
        virtual: preferences.virtual
    }

    newPreferences[key] = !newPreferences[key];

    setPreferences(newPreferences)
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginBottom: 20,
        marginTop: 15
    },
    preferenceContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    preferenceCard: {
        padding: 10,
        // width: '50%',
        flex: 1,
        height: 100,
        backgroundColor: Theme.white,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        justifyContent: 'space-between'
    },
    preferenceCardText: {
        fontSize: 22,
        fontWeight: '500'
    },
    muted: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 50,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        color: '#888'
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    transactionContainer: {
        paddingVertical: 20
    },
    card: {
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
        alignItems: 'center',
        // flexDirection: 'row',
        // justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        // backgroundColor: Theme.black,
        color: Theme.black,
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
    borderTopOn: {
        borderTopColor: Theme.primary,
        borderTopWidth: 10
    },
    borderTopOff: {
        borderTopColor: Theme.gray,
        borderTopWidth: 10
    }

});

export default Preferences;