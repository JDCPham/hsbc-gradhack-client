import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

/* Components */
import Header from '../../../common/header';

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';

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
            <SafeAreaView style={styles.Container}>
                <View style={styles.textContainer}>
                    <Text>Congratulations!</Text>
                </View>
                <View style={styles.activityContainer}>
                    <Text>Your activity has been setup</Text>
                </View>
                <View style={[styles.btnContainer]}>
                    <Button style={[styles.mybtn]} labelStyle={{color: Theme.black, fontWeight: '700', fontSize: 16}} mode="contained" onPress={() => navigation.navigate('dashboard')} uppercase={false}>Go To Home Page</Button>
                </View>
                {/* <TouchableOpacity style={styles.actDetContainer}>
                    <Text style={{fontWeight : 'bold'}}>See Activity Details</Text>
                </TouchableOpacity> */}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: '80%',
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
        flex: 1 ,
        backgroundColor: '#fff',
        alignItems  : 'center',
      },
    textContainer: {
        height: 75,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        top : 50,
      },
    activityContainer: {
        height: 50,
        width : '100%',
        alignItems : 'center',
        top : 50,
        marginBottom: 50,
    },
    actDetContainer: {
        height: 50,
        width : 150 ,
        backgroundColor : '#F4CC33',
        alignItems : 'center',
        justifyContent : 'center' ,
        top : 130,
        elevation : 10 ,
    },
})

export default ActivityHistory;