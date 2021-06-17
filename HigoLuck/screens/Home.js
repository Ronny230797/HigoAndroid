import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    },
    view: {
        padding: 5,
        margin: 5,
    },
});

const Home = ({ navigation }) => {
    return (
        <View>
            <View style={styles.view}>
                <Button title='Vender' onPress={()=> navigation.navigate('MainScreen')} />
             </View>
            <View style={styles.view}>
                <Button title='Reclamar' onPress={()=> navigation.navigate('Reward')} />
            </View>
            <View style={styles.view}>
                <Button title='Configuraciones' onPress={()=> navigation.navigate('Settings')} />
            </View>
        </View>
    )
}

export default Home;