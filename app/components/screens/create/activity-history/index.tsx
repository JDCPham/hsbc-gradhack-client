import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';

/* Components */
import Header from '../../../common/header';
import MapView, { Marker } from 'react-native-maps';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';
import { ContainedButtonPaperTheme, OutlinedButtonPaperTheme } from '../../../../../styles/paper.style';
import ButtonStyle from '../../../../../styles/button.style';

function ActivityHistory(props: any) {
    // Get Naviation Object.
    const navigation = props.navigation;

    const [latitude, setLatitude] = React.useState(51.52161943551172);
    const [longitude, setLongitude] = React.useState(-0.12331380640133469);

    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>
            <ScrollView style={[styles.Container]}>
                <View style={[styles.plotContainer]}>
                    <Text>Hitsorical Show-up rate for Chosen Categories</Text>
                    <Chart
                        style={{ height: 200, width: '100%' }}
                        data={[
                            { x: 1, y: 80 },
                            { x: 2, y: 85 },
                            { x: 3, y: 76 },
                            { x: 4, y: 65 },
                            { x: 5, y: 90 },
                            { x: 6, y: 71 },
                            { x: 7, y: 81 },
                            { x: 8, y: 72 },
                            { x: 9, y: 54 },
                            { x: 10, y: 62 },
                            { x: 11, y: 80 },
                            { x: 12, y: 85 },
                            { x: 13, y: 76 },
                            { x: 14, y: 65 },
                            { x: 15, y: 90 },
                            { x: 16, y: 71 },
                            { x: 17, y: 81 },
                            { x: 18, y: 72 },
                            { x: 19, y: 54 },
                            { x: 20, y: 62 },
                            { x: 21, y: 88 },
                        ]}
                        padding={{ left: 30, bottom: 15, right: 10, top: 10 }}
                        xDomain={{ min: 1, max: 21 }}
                        yDomain={{ min: 40, max: 100 }}
                        >
                        <VerticalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(1) } }} />
                        <HorizontalAxis tickCount={5} />
                        {/* <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} /> */}
                        <Line theme={{ stroke: { color: Theme.primary, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
                    </Chart>
                </View>
                <View style={[styles.plotContainer]}>
                    <Text> Here is the map plot</Text>
                    <MapView provider="google" region={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.2,
                            longitudeDelta: 0.2,
                        }} showsUserLocation={true} style={styles.map} >
                        </MapView>
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
                <View style={{marginVertical: 60}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
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
        // height: 300,
        marginHorizontal: 20,
        borderLeftWidth: 10,
        borderLeftColor: Theme.primary
    },
    mapContainer: {
        // marginTop: 20,
        backgroundColor: Theme.primary,
        // height: 200,
        width: '100%',
    },
    card: {
        width: '90%',
        marginHorizontal: 20,
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
    map: {
        width: '100%',
        height: 300,
        marginTop: 20,
        borderWidth: 6,
        borderColor: Theme.primary
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