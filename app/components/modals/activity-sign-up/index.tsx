import { faCross, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Theme from '../../../../styles/theme.style';
import Spacing from '../../../../styles/spacing.style';
import Header from '../../common/header';
// import MapView, { Marker } from 'react-native-maps';
import moment from 'moment';
import ButtonStyle from '../../../../styles/button.style';
import { Button, TextInput } from 'react-native-paper';
import { ContainedButtonPaperTheme, InputPaperTheme2 } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import currency from 'currency.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ActivitySignUp(props: any) {

    // Hooks
    const [image, setImage] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [timestamp, setTimestamp] = React.useState("");
    const [latitude, setLatitude] = React.useState(51.52161943551172);
    const [longitude, setLongitude] = React.useState(-0.12331380640133469);
    const [eventFee, setEventFee] = React.useState(0);
    const [penaltyFee, setPenaltyFee] = React.useState(0);
    const [location, setLocation] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);
    const [virtual, setVirtual] = React.useState(false);
    const [zoom, setZoom] = React.useState("");
    const [countdown, setCountdown] = React.useState(0);
    const [canSignIn, setCanSignIn] = React.useState(false);

    // Effects
    useEffect(() => getData(props.activity, setIsLoading, setImage, setTitle, setLocation, setDescription, setTimestamp, setEventFee, setPenaltyFee, setVirtual, setZoom, setCanSignIn), [])


    if (isLoading) return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size="large" color={Theme.black} />
        </View>
    )
    else return (
        <View style={styles.container}>

            <View style={{ backgroundColor: Theme.primary, width: '100%' }}>
                <SafeAreaView>
                    <Header hideLogout={true} />
                </SafeAreaView>
            </View>
            <View style={{ width: '100%' }}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.title}>{title}</Text>
                        <Image source={{ uri: image }} style={[styles.image]} />
                        <Text style={styles.subtitle}>{moment(timestamp).fromNow()}</Text>
                    </View>
                    {/* <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 50, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined">Back to dashboard</Button> */}
                    <View style={{ marginTop: 30 }}>
                        <Button icon="creation" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => addActivity(props.activity, props.setModalVisible)}>Sign up</Button>
                    </View>
                    <View style={[styles.card, { marginTop: 40 }]}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>🗓</Text>
                        <Text style={styles.headingAlt3}>{moment(timestamp).format('ddd Do MMMM YYYY')}</Text>
                    </View>

                    <View style={[styles.card, { marginTop: 10 }]}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>⏰</Text>
                        <Text style={styles.headingAlt3}>{moment(timestamp).format('hh:mm A')}</Text>
                    </View>

                    {
                        virtual ? <View style={[styles.card, { marginTop: 10 }]}>
                            <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>💻</Text>
                            <Text style={styles.headingAlt3}>Virtual Event</Text>
                        </View> : <View style={[styles.card, { marginTop: 10 }]}>
                                <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>🏔</Text>
                                <Text style={styles.headingAlt3}>Physical Event</Text>
                            </View>
                    }

                    {
                        virtual ? <View style={[styles.card, { marginTop: 10 }]}>
                            <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>📍</Text>
                            <Text style={styles.headingAlt3}>Scroll down for Zoom Link</Text>
                        </View> : <View style={[styles.card, { marginTop: 10 }]}>
                                <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>📍</Text>
                                <Text style={styles.headingAlt3}>{location}</Text>
                            </View>
                    }



                    <View style={[styles.card, { marginTop: 10 }]}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>🤔</Text>
                        <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 10 }}>Description</Text>
                        <Text style={styles.paragraph}>{description}</Text>
                    </View>

                    <View style={[styles.card, { marginTop: 10 }]}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>💰</Text>
                        <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 10 }}>Event Fee</Text>
                        <Text style={[styles.paragraph2]}>This is the fee you pay the event organiser to attend the event. Neither Majyk or HSBC receive this fee.</Text>
                        <Text style={[styles.headingAlt3, { fontSize: 32 }]}>{currency(eventFee).value <= 0 ? "Free" : currency(eventFee).format()}</Text>
                    </View>

                    <View style={[styles.card, { marginTop: 10 }]}>
                        <Text style={{ fontSize: 48, marginTop: -10, padding: 0 }}>🙁</Text>
                        <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 10 }}>Penalty Fee</Text>
                        <Text style={[styles.paragraph2]}>Also known as a "No-Show Fee" or "NSF". This fee will be deducted from your virtual wallet if you cancel your attendance, or the event organiser marks you as absent.</Text>
                        <Text style={[styles.headingAlt3, { fontSize: 32 }]}>{currency(penaltyFee).format()}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Button icon="creation" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => addActivity(props.activity, props.setModalVisible)}>Sign up</Button>
                    </View>
                    <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined">Back to dashboard</Button>

                    <View style={{ marginVertical: 60 }}></View>
                </ScrollView>
            </View>

        </View>
    );
}

function getData(identifier: any, setIsLoading: any, setImage: any, setTitle: any, setLocation: any, setDescription: any, setTimestamp: any, setEventFee: any, setPenaltyFee: any, setVirtual: any, setZoom: any, setCanSignIn: any): void {
    if (identifier == null) return;
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/activity/${identifier}`, { method: 'GET' }).then(response => response.json()).then(res => {
        setTitle(res['Name'])
        setLocation(res['Location'])
        setImage(res['Image'])
        setTimestamp(res['Timestamp'])
        setDescription(res['Description'])
        setEventFee(res['Cost'])
        setPenaltyFee(res['Penalty'])
        setVirtual(res['Virtual'])
        setZoom(res['Zoom'])
        setCanSignIn(moment().isBefore(moment(res['Timestamp']).add(15, 'minutes')) && moment().isAfter(moment(res['Timestamp']).subtract(1, 'hours')))

        setIsLoading(false)

    })
}

function addActivity(identifier: any, setModalVisible: any): void {
    if (identifier == null) return;
    AsyncStorage.getItem('email').then(email => {
        fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/add-activity/${email}/${identifier}`, { method: 'POST' }).then(response => response.json()).then(res => {
            setModalVisible(false);
        })
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
        alignItems: "center",
        width: '100%'
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.black,
        color: Theme.primary,
        textTransform: 'uppercase'
    },
    headingAlt: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.primary,
        color: Theme.black,
        textTransform: 'uppercase'
    },
    headingAlt2: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        letterSpacing: 0.5,
        backgroundColor: Theme.white,
        color: Theme.black,
        borderWidth: 2,
        borderColor: Theme.primary,
        textTransform: 'uppercase'
    },
    headingAlt3: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
        letterSpacing: 0.5,
        color: Theme.black,
        textTransform: 'uppercase'
    },
    map: {
        width: '100%',
        height: 300,
        marginTop: 20,
        borderWidth: 6,
        borderColor: Theme.primary
    },
    title: {
        color: Theme.primary,
        fontSize: 24,
        padding: 10,
        fontWeight: '600',
        backgroundColor: Theme.black,
        textAlign: 'center'
    },
    subtitle: {
        color: Theme.black,
        fontSize: 24,
        padding: 10,
        fontWeight: '600',
        backgroundColor: Theme.primary,
        textAlign: 'center'
    },
    paragraph: {
        color: Theme.black,
        fontSize: 16,
        marginTop: 15,
        fontWeight: '400',
        textAlign: 'justify',
        lineHeight: 26
    },
    paragraph2: {
        color: Theme.black,
        fontSize: 16,
        marginTop: 5,
        fontWeight: '400',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    button1: {
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: Theme.black,
        color: Theme.primary
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
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
});

export default ActivitySignUp;