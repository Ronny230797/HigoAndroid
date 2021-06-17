import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, Alert } from 'react-native';

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

const showAlert = () =>
  Alert.alert(
    "Error",
    "Usuario Invalido",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const Login = ({ navigation }) => {

    const isUserValid = async () => {
        let response = await fetch(
          'http://161.97.71.194:5000/user/login',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName:"donny_2",
                password:"123456789"
            })
          }
        );
        let json = await response.json();

        let entrar = false;

        console.log(json);

        if(json.userId != undefined){
            navigation.navigate('Home');
        }else{
            showAlert();
        }

      }
    

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
            <Button title="Ingresar" onPress={() => isUserValid()}/>
            </View>
        </View>

    )
}

export default Login;