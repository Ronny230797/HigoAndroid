import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>I am in Home Screen</Text>
            <Button title='Settings' onPress={()=> navigation.navigate('Settings')} />
        </View>
    )
}

export default Home;