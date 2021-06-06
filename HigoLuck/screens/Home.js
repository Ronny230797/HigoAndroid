import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title='Vender' onPress={()=> navigation.navigate('MainScreen')} />
            <Button title='Reclamar' onPress={()=> navigation.navigate('')} />
            <Button title='Configuraciones' onPress={()=> navigation.navigate('Settings')} />
        </View>
    )
}

export default Home;