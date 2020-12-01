import React from 'react';
import Theme from '../../../../../styles/theme.style';

/* React Imports */
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, Image } from 'react-native';

import ActivityListCard from '../../../common/activity-list-view-card';


const ListCategories = () => {
    var categoryNameList = ["History Discussion", "Politics Discussion", "Cooking",
        "Reading", "Running", "Spinning"];
    var categoryList = [];
    for (let i = 0; i < categoryNameList.length; i++) {
        categoryList.push(
            <View>
                <ActivityListCard activityCategory={categoryNameList[i]} />
            </View>
        );
    }
    return categoryList;
}
const ListCategoriesComponent = ListCategories();

export function ShowActivityCategories(props: any) {

    return (
        <View>
            {ListCategoriesComponent}
        </View>
    );
}

export default ShowActivityCategories;
