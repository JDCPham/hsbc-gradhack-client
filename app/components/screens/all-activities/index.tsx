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
import Spacing from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme2 } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Card from '../../common/card';
import { faCheck, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import ActivitySignUp from '../../modals/activity-sign-up';


function AllActivities(props: any) {

    /* Hooks */
    const [activities, setActivities] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isQuietLoading, setIsQuietLoading] = React.useState(false);
    const [currentActivity, setCurrentActivity] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    // API Call: User Details and Upcoming Activities.
    useEffect(() => {
        getData(setActivities, setIsLoading, setIsQuietLoading);
    }, [])

    const onRefresh = React.useCallback(() => {
        setIsQuietLoading(true);
        getData(setActivities, setIsLoading, setIsQuietLoading);
    }, []);

    if (isLoading === true) return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Theme.primary }}>
            <ActivityIndicator size="large" color={Theme.black} />
        </View>
    )

    else return (
        <View>
             <View>
                <Modal animationType="slide" transparent={true} visible={modalVisible} children={<ActivitySignUp setModalVisible={setModalVisible} activity={currentActivity} onRefresh={onRefresh} />} />
            </View>
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
                    <View style={[Spacing.mt3, Spacing.mb1]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>All Activities</Text>
                            <Text style={styles.titleAlt}>🚀</Text>
                        </View>


                        {activities.map((activity, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={() => {
                                    setCurrentActivity(activity['Identifier']);
                                    setModalVisible(true);
                                }}>
                                    <Card
                                        image={activity['Image']}
                                        title={activity['Name']}
                                        location={activity['Location']}
                                        timestamp={activity['Timestamp']}
                                        venue={activity['Host']}
                                        price={activity['Cost']} />
                                </TouchableOpacity>

                            )
                        })}

                    </View>
                    <View style={{ marginVertical: 50 }}></View>
                </View>
            </ScrollView>
        </View>
    );
}

function getData(setActivities: any, setIsLoading: any, setIsQuietLoading: any): void {
    fetch(`https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/all-activities`, { method: 'GET' }).then(response => response.json()).then(res => {
        console.log("success")
        console.log(res)
        setActivities(res)
        setIsQuietLoading(false);
        setIsLoading(false);
    }).catch(error => console.log(error))
}


const styles = StyleSheet.create({
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
    image: {
        width: 50,
        height: 50,
        marginBottom: 5,
        marginTop: 0
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

export default AllActivities;