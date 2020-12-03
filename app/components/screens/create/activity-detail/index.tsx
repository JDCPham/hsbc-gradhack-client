import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, RefreshControl } from 'react-native';
import { TextInput } from 'react-native';

/* Components */
import Header from '../../../common/header';

/* Theming */
import Theme from '../../../../../styles/theme.style';
import { Button } from 'react-native-paper';
import {OutlinedButtonPaperTheme} from '../../../../../styles/paper.style';

function ActivityDetail(props: any) {

    // Get Naviation Object.
    const navigation = props.navigation;

    return (
        <View>
            <View style={{ backgroundColor: Theme.black }}>
                <SafeAreaView>
                    <Header navigation={props.navigation} />
                </SafeAreaView>
            </View>
            <View style={[styles.inputContainer]}>
                <TextInput style={[styles.inputText]} placeholder='Activity Name'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Host Name'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Image URL'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Location'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Postcode'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Event Fee'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Penalty Fee'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Date and Time'></TextInput>
                <TextInput style={[styles.inputText]} placeholder='Virtual or Onsite'></TextInput>
                <TextInput style={[styles.inputText]} placeholder= 'Category' ></TextInput>
            </View>
            <View style={[styles.btnContainer]}>
                <Button style={[styles.mybtn, {backgroundColor: Theme.primary}]} labelStyle={{color: Theme.black, fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('history')}>Next</Button>
                <Button style={[styles.mybtn, {marginTop: 20, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{fontWeight: '700', fontSize: 16, letterSpacing: 2 }} mode="outlined" onPress={() => navigation.navigate('dashboard')}>Cancel</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        fontSize: 20,
        height: 40, 
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputContainer: {
        width: '80%',
        alignSelf: 'center',
        paddingTop: 20,
    },
    btnContainer: {
        width: '80%',
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

export default ActivityDetail;