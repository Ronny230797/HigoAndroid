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

const Login = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <View>
            <TextInput
        style={styles.input}
      />
            </View>
            <View>
            <TextInput
        style={styles.input}
      />
            </View>
            <View>
            <Button title="Ingresar" onPress={()=> navigation.navigate('Home')}/>
            </View>
        </View>

    )
}

export default Login;