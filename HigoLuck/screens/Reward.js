import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, Alert } from 'react-native';
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer';




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
    "Alert Title",
    "My Alert Msg",
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

  const IsBLActive = () =>{
    RNZebraBluetoothPrinter.isEnabledBluetooth().then((res) => {
        if(res == false){
            console.log('BL Desactivado')
        }
    })
}

const Reward = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Text>Reclamar Premio</Text>
            <Button title="Reclamar" onPress={IsBLActive}/>
            <Button title="Show alert" onPress={showAlert} />
        </View>

    )
}

export default Reward;