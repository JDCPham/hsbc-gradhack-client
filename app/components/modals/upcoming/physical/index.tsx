import { faCross, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Theme from '../../../../../styles/theme.style';
import Spacing from '../../../../../styles/spacing.style';
import Header from '../../../common/header';
import MapView, { Marker } from 'react-native-maps';
import moment from 'moment';
import ButtonStyle from '../../../../../styles/button.style';
import { Button } from 'react-native-paper';
import { ContainedButtonPaperTheme } from '../../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../../styles/paper.style';
import currency from 'currency.js';

function UpcomingPhysicalActivity(props: any) {

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

    // Effects
    useEffect(() => getData(props.activity, setIsLoading, setImage, setTitle, setLocation, setDescription, setTimestamp, setEventFee, setPenaltyFee), [])


    if (isLoading) return (
        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <ActivityIndicator size="large" color={Theme.black}/>
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
                        <Text style={styles.subtitle}>{location}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.heading]}>DATE</Text>
                            <Text style={styles.headingAlt}>🗓</Text>
                            <Text style={styles.headingAlt2}>{moment(timestamp).format('ddd Do MMM YYYY')}</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.heading]}>Time</Text>
                            <Text style={styles.headingAlt}>⏱</Text>
                            <Text style={styles.headingAlt2}>{moment(timestamp).format('hh:mm A')}</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={[styles.heading]}>Description</Text>
                            <Text style={styles.headingAlt}>📄</Text>
                        </View>
                        <Text style={styles.paragraph}>{description}</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.heading]}>Location</Text>
                            <Text style={styles.headingAlt}>🗺</Text>
                        </View>
                        <MapView provider="google" region={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.2,
                            longitudeDelta: 0.2,
                        }} showsUserLocation={true} style={styles.map} >
                        </MapView>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.heading]}>Event Fee</Text>
                            <Text style={styles.headingAlt}>💰</Text>
                            <Text style={styles.headingAlt2}>{currency(eventFee).format()}</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.heading]}>Penalty Fee</Text>
                            <Text style={styles.headingAlt}>😰</Text>
                            <Text style={styles.headingAlt2}>{currency(penaltyFee).format()}</Text>
                        </View>
                    </View>

                    <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 50, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined">Back to dashboard</Button>
                    <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.black, borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained">Cancel Attendance</Button>
                    <Button icon="creation" onPress={() => props.setModalVisible(false)} style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginHorizontal: 20, marginTop: 10, borderColor: Theme.primary, borderWidth: 2, backgroundColor: Theme.primary }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained">Sign in to event</Button>
                    <View style={{ marginVertical: 50 }}></View>
                </ScrollView>
            </View>

        </View>
    );
}

function getData(identifier: any, setIsLoading: any, setImage: any, setTitle: any, setLocation: any, setDescription: any, setTimestamp: any, setEventFee: any, setPenaltyFee: any): void {
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/activity/${identifier}`, { method: 'GET' }).then(response => response.json()).then(res => {
        console.log(res)
        setTitle(res['Name'])
        setLocation(res['Location'])
        setImage(res['Image'])
        setTimestamp(res['Timestamp'])
        setDescription(res['Description'])
        setEventFee(res['Cost'])
        setPenaltyFee(res['Penalty'])
        setIsLoading(false)
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
        fontWeight: '500',
        textAlign: 'left'
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
    }
});

export default UpcomingPhysicalActivity;