import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator, Modal, RefreshControl, TouchableOpacity } from 'react-native';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import currency from 'currency.js';

/* Components */
import Header from '../../common/header';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme2 } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';


function Profile(props: any) {

    /* Hooks */
    const [isLoading, setIsLoading] = React.useState(true);


    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Image style={styles.Image} source={require('../../../assets/animations/profile.jpg')} />
                        <Text style={styles.name}>John Pham</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>📧</Text>
                        <TextInput label="💌 EMAIL" style={[InputStyle.input, styles.input]} mode="outlined" disabled={true} theme={InputPaperTheme2} value="john.smith@majyk.com" />
                    </View>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>🔐</Text>
                        <TextInput label="🔑 PASSWORD" style={[InputStyle.input, styles.input]} mode="outlined" disabled={true} theme={InputPaperTheme2} value="ILoveHSBC!" secureTextEntry={true}/>
                    </View>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>📍</Text>
                        <TextInput label="🗺 LOCATION" style={[InputStyle.input, styles.input]} mode="outlined" disabled={true} theme={InputPaperTheme2} value="London, United Kingdom" secureTextEntry={false}/>
                    </View>
                    <View>
                        <Button icon="shield-alert" style={[ButtonStyle.btn, { justifyContent: 'center', marginTop: 30, flex: 1, }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="contained">Save profile</Button>
                    </View>
                    <View>
                        <Button icon="creation" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, borderColor: '#111', borderWidth: 2, marginTop: 10 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => props.navigation.navigate("Login")}>Log out</Button>
                    </View>
                   
                    <View>
                        <Text style={{textAlign: 'center', color: Theme.gray, marginTop: 30}}>A product from</Text>
                        <Image style={styles.hsbc} source={require('../../../assets/animations/hsbc.png')} />
                    </View>
                    <Text style={{textAlign: 'center', color: Theme.gray, marginTop: 40}}>Privacy Policy | Terms & Conditions | Cookie Policy</Text>
                    <View style={{ marginVertical: 50 }}></View>
                </View>
            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    name: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 10
    },
    input: {
        width: '100%',
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
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    hsbc: {
        width: 110,
        marginTop: 10,
        alignSelf: 'center',
        height: 20
    },
    ImageContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        height: 150,

    },
    EmailContainer: {

        height: 50,
        width: '80%',
        backgroundColor: '#fff',
        top: 30,
        borderLeftWidth: 10,
        borderLeftColor: '#F4CC33',
        elevation: 10,
        justifyContent: 'center',
    },
    Image: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderColor: Theme.primary,
        borderWidth: 7
    },

});

export default Profile;