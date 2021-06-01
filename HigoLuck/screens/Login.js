import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#FFFFFF'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    image:{
        width:100,
        height: 100,
    },
});

const Login = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../../images/HLlogo.png')} style={styles.image}/>
                <Text>Book1</Text>
                <Text>Hola mundo</Text>
            </View>
            <View style={styles.container}>
                <Text>Book2</Text>
                <Text>Hola mundo</Text>
            </View>
            <View style={styles.container}>
                <Text>Book3</Text>
                <Text>Hola mundo</Text>
            </View>
        </View>




    )
}

export default Login;