import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#FFFFFF'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
});

const Reward = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Text>Reclamar</Text>
        </View>

    )
}

export default Reward;