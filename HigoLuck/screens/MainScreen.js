import React from 'react';
import { View, Text, Button } from 'react-native';
import AddNumber from '../components/AddNumber';
import SelectedNumbers from '../components/SelectedNumbers';

const MainScreen = (props) => {
    return (
        <View>
            <Text>Main Screen</Text>
            <View>
            <AddNumber />
            </View>
            <View>
            <SelectedNumbers />
            </View>
        </View>
    )
}

export default MainScreen;