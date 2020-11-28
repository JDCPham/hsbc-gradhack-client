import React from 'react';

/* React Imports */
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/* React Paper Imports */
import {
    Provider as PaperProvider,
    TextInput,
    Button
} from 'react-native-paper';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';

export function Login(props: any) {

    // Get Naviation Object.
    const navigation = props.navigation;

    // Hooks.
    const [isLoggingIn, setLoggingIn] = React.useState(false);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.innerContainer} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <Image source={require('../../../assets/animations/community.gif')} style={{ width: 160, height: 160 }} />
                    <Text style={{ marginTop: -5, fontSize: 50, letterSpacing: 5, fontWeight: 'bold' }}>MAJYK</Text>
                    <Text style={{ marginTop: 5, marginBottom: 30, fontSize: 14, letterSpacing: 0.5, fontWeight: 'bold' }}>SOCIAL INVESTMENTS</Text>
                    <View style={styles.inputContainer}>
                        <TextInput label="💌 EMAIL" style={[InputStyle.input]} mode="outlined" theme={InputPaperTheme} keyboardType="email-address" />
                        <TextInput label="🔑 PASSWORD" style={[InputStyle.input, SpacingStyle.mt1]} secureTextEntry={true} mode="outlined" theme={InputPaperTheme} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button icon="creation" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1, marginRight: 5, borderColor: '#111', borderWidth: 2 }]} theme={OutlinedButtonPaperTheme} labelStyle={{ color: Theme.black, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="outlined">Register</Button>
                        <Button icon="login" style={[ButtonStyle.btn, { justifyContent: 'center', marginLeft: 5, flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }} mode="contained" loading={isLoggingIn} onPress={onLoginPress}>Login</Button>

                    </View>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.forgotPassword}>
                <Text style={{ fontSize: 16 }}>Forgotten password?</Text>
            </View>
        </PaperProvider>
    );

    function onLoginPress() {

        // Set loading flag.
        setLoggingIn(!isLoggingIn);

        // Navigate to other page.
        navigation.navigate("Main");

    
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '80%',
        paddingTop: 20,
        paddingBottom: 20
    },
    forgotPassword: {
        width: '100%',
        paddingBottom: 30,
        fontSize: 50,
        backgroundColor: Theme.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Login;
