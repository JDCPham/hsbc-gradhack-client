import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

/* Components */
import Header from '../../../common/header';

/* Theming */
import { Button } from 'react-native-paper';
import { ContainedButtonPaperTheme, OutlinedButtonPaperTheme } from '../../../../../styles/paper.style';
import Theme from '../../../../../styles/theme.style';
import InputStyle from '../../../../../styles/input.style';
import SpacingStyle from '../../../../../styles/spacing.style';
import ButtonStyle from '../../../../../styles/button.style';
import { InputPaperTheme } from '../../../../../styles/paper.style';

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
            <ScrollView>
                <View style={[styles.inputContainer]}>
                    <TextInput label="💌 ACTIVITY NAME" style={[InputStyle.input, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="🔑 HOST NAME" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="🏙 IMAGE" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="📍 LOCATION" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="💰 EVENT FEE" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="🗓 DATE AND TIME" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="💻 VIRTUAL OR PHYSICAL" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />
                    <TextInput label="📁 CATEGORY" style={[InputStyle.input, SpacingStyle.mt1, styles.customInput]} mode="outlined" theme={InputPaperTheme} />

                </View>
                <View style={[styles.btnContainer]}>
                    <Button style={[ButtonStyle.btn, { justifyContent: 'center', width: '100%', flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" onPress={() => navigation.navigate('history')}>Next</Button>
                    <Button style={[ButtonStyle.btn, { width:'100%', justifyContent: 'center', flex: 1, marginTop: 10, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined" onPress={() => navigation.navigate('dashboard')}>Cancel</Button>
                </View>
                <View style={{marginVertical: 50}}></View>
            </ScrollView>
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
    customInput: {
        width: '100%',
        backgroundColor: Theme.white
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