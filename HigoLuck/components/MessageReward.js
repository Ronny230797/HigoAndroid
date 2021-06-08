// import React from 'react';
// import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native';


// const MessageReward = ({ navigation }) => {
//     return (
//         <View >

//         </View>

//     )
// }

// export default MessageReward;
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
    "New Alert",
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
          Alert.alert('BL Desactivado')
           
        }else{
          Alert.alert('BL Activado')
        }
    })
}

const PairedDevices = () =>{
  let deviceAddress = '';
  RNZebraBluetoothPrinter.pairedDevices().then((deviceArray) => {
    deviceArray.map(element =>{
      console.log(element.address)
      Alert.alert(element.address)
    })
})
}

const Print = () =>{
  // const zpl = "^XA^FX Top section with company logo, name and address.^CF0,60^FO50,50^GB100,100,100^FS^ FO75,75 ^ FR ^ GB100, 100, 100 ^ FS^ FO88, 88 ^ GB50, 50, 50 ^ FS ^XZ";
  const zpl = "Hello world";
  const deviceAddress = '00:11:22:33:44:55';
  RNZebraBluetoothPrinter.print(deviceAddress,zpl).then((res) => {
    console.log(res)
    Alert.alert('Success');
})

}

const Reward = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Text>Reclamar Premio</Text>
            <Button title="Reclamar" onPress={Print}/>
            <Button title="Show alert" onPress={showAlert} />
        </View>

    )
}

export default Reward;