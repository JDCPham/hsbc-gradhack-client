import React from 'react';
import Theme from '../../../../../styles/theme.style';


/* React Imports */
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import ActivityCard from '../../../common/activityInfo';

const styles = StyleSheet.create({
    descriptionTxtStyle: {
        fontSize: 14,
        fontWeight: '400',
        borderColor: Theme.white,
        borderWidth: 2,
        backgroundColor: Theme.white,
        color: Theme.black,
        paddingVertical: 1,
        paddingHorizontal: 8
    },
    extraInfoStyle: {
        fontSize: 14,
        fontWeight: '600',
        borderColor: Theme.white,
        backgroundColor: Theme.white,
        color: Theme.black,
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    map: {
        flex: 1,
        width: '90%',
        height: '40%'
    }
});


const activityTestApi = 'https://isuc1znamb.execute-api.us-east-2.amazonaws.com/prod/individualActivityInfo?activityID=01e51b72-e636-477e-83b2-047f4f1ba997';

export function ShowActivityInfo(props: any) {

    const navigation = props.navigation;

    // Hooks.
    const [cost, setCost] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [host, setHost] = React.useState(null);
    const [identifier, setIdentifier] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [penalty, setPenalty] = React.useState(null);
    const [postcode, setPostcode] = React.useState(null);
    const [tags, setTags] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [virtual, setVirtual] = React.useState(null);
    const [zoom, setZoom] = React.useState(null);

    fetch(activityTestApi, {
        method: 'GET'
    })
        .then(response => response.json()).then(res => {
            setCost(res['Cost'])
            setDescription(res['Description'])
            setIdentifier(res['CosIdentifiert'])
            setHost(res['Host'])
            setImage(res['Image'])
            setLocation(res['Location'])
            setName(res['Name'])
            setPenalty(res['Penalty'])
            setPostcode(res['Postcode'])
            setTags(res['Tags'])
            setTime(res['Timestamp'])
            setVirtual(res['Virtual'])
            setZoom(res['Zoom'])
        })
        .catch(error => {
            alert("An error occurred.")
        });

    function fillActivityCard() {
        return <ScrollView>
            <ActivityCard image={image}
                title={name}
                location={location}
                tags={tags}
                timestamp={time}
                price={cost}
                rating={4.5} />
            <Text style={[styles.descriptionTxtStyle]}>
                {description}
            </Text>
            <Text style={[styles.extraInfoStyle]}>
                Absence Penalty: ${penalty}
            </Text>
            <Text style={[styles.extraInfoStyle]}>
                Is A Virtual Event: {virtual ? "Yes" : "No"}
            </Text>
            <Text style={[styles.extraInfoStyle]}>
                Host: {host}
            </Text>
            <Text style={[styles.extraInfoStyle]}>
                Zoom: {zoom ? zoom : "N/A"}
            </Text>
        </ScrollView>;
    }
    const ThisActivityCard = fillActivityCard();

    return (
        <View>
            {ThisActivityCard}
        </View>
    );
}

export default ShowActivityInfo;