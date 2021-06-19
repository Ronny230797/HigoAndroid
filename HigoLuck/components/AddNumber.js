import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Picker, Button, Alert } from 'react-native';
import { addNumber } from '../store/Actions';
import { useDispatch } from 'react-redux';
import { RadioButton } from 'react-native-paper';


const AddNumber = (props) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const [amount, setAmount] = useState();
  const [dayNaight, setDayNaight] = useState('Day');
  const [value, setValue] = React.useState('first');

  let numberElement = {
    number: number,
    amount: amount,
    dayNight: dayNaight
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Número"
        keyboardType="numeric"
        maxLength={2}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Monto"
        keyboardType="numeric"
        maxLength={5}
      />

<View style={styles.container}>

      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.container}>
        <View style={styles.box1}>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View style={styles.box2}>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
        </View>
      </RadioButton.Group>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.container}>
        <View style={styles.box1}>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View style={styles.box2}>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
        </View>
      </RadioButton.Group>

      </View>

      {/* <Picker
        selectedValue={dayNaight}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setDayNaight(itemValue)}
      >
        <Picker.Item label="Día" value="Day" />
        <Picker.Item label="Noche" value="Night" />
      </Picker> */}

      {/* <Button title='Add' onPress={() => dispatch(addNumber(numberElement))} /> */}


      <Button title='Add' onPress={() => props.InsertNumber(numberElement)} />
    </View>
  )
}

export default AddNumber;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    margin: 12,
    flex: 1, 
    flexDirection: 'row',   
  },
  box1: {
    width: 80,
  },
  box2: {
    width: 80,
  },
});