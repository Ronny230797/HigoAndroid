import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, Alert } from 'react-native';

const showAlert = () =>{
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
}

  export default showAlert();