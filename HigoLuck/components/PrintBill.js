import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';

import SunmiV2Printer from 'react-native-sunmi-v2-printer';

const App = ( { navigation }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    let listener = null;

    try {
      listener = DeviceEventEmitter.addListener('PrinterStatus', (action) => {
        switch (action) {
          case SunmiV2Printer.Constants.NORMAL_ACTION:
            setStatus(() => 'printer normal');
            break;
          case SunmiV2Printer.Constants.OUT_OF_PAPER_ACTION:
            setStatus(() => 'printer out out page');
            break;
          case SunmiV2Printer.Constants.COVER_OPEN_ACTION:
            setStatus(() => 'printer cover open');
            break;
          default:
            setStatus(() => 'printer status:' + action);
        }
      });
    } catch (e) {
      console.log(e);
    }

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, []);

  const print = async () => {
    let orderList = [
      ['2020-11-25 15:00:00', '', ''],
      ['Some item x 1', '', ''],
      ['', '', '$100'],
      ['2020-11-25 15:00:00', '', ''],
      ['Some item x 1', '', ''],
      ['', '', '$100'],
    ];
    let totalAmount = 0;
    let numbersList = [
      {
        'number':23,
        'amount': 500,
        'DiaNoche': 'D' 
      },
      {
        'number':60,
        'amount': 1500,
        'DiaNoche': 'D' 
      },
      {
        'number':80,
        'amount': 700,
        'DiaNoche': 'D' 
      }
    ]

    let columnAliment = [0, 1, 2];
    let columnWidth = [25, 1, 5];
    try {
      let today = new Date();
      //set aligment: 0-left,1-center,2-right
      await SunmiV2Printer.setAlignment(1);
      await SunmiV2Printer.setFontSize(40);
      await SunmiV2Printer.printOriginalText('Higo Luck\n');
      await SunmiV2Printer.setFontSize(50);
      await SunmiV2Printer.printOriginalText('Tiempos\n');
      await SunmiV2Printer.setFontSize(20);
      await SunmiV2Printer.setAlignment(0);
      await SunmiV2Printer.printOriginalText('# Venta: AF-23567\n');
      await SunmiV2Printer.printOriginalText(`Fecha Venta: ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} \n`);
      await SunmiV2Printer.printOriginalText(
        '===============================\n',
      );
      await SunmiV2Printer.setFontSize(22);
      // for (var i in orderList) {
      //   console.log(orderList[i]);
      //   console.log(columnWidth);
      //   console.log(columnAliment);
      //   await SunmiV2Printer.printColumnsText(
      //     orderList[i],
      //     columnWidth,
      //     columnAliment,
      //   );
      // }
      for(let log in numbersList){
        console.log(numbersList[log])
        totalAmount = totalAmount + numbersList[log].amount;
        await SunmiV2Printer.printOriginalText(`${numbersList[log].number}   ${numbersList[log].amount}   ${numbersList[log].DiaNoche}\n`);
      
      }
        
      await SunmiV2Printer.setFontSize(20);
      await SunmiV2Printer.printOriginalText(
        '===============================\n',
      );
      await SunmiV2Printer.setAlignment(2);
      await SunmiV2Printer.setFontSize(30);
      await SunmiV2Printer.printOriginalText(`Total: ₡${totalAmount}\n`);
      await SunmiV2Printer.setFontSize(20);
      await SunmiV2Printer.printOriginalText(
        '===============================\n',
      );
      await SunmiV2Printer.printOriginalText('\n\n');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => print()}>
        <Text style={styles.buttonText}>Print</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'white',
  },
});

export default App;