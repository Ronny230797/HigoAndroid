import React, { useState }  from 'react';
import { Text, View, StyleSheet, Image, TextInput, Picker,Button,Alert  } from 'react-native';
import {addNumber} from '../store/Actions';
import { useDispatch } from 'react-redux';

const AddNumber = (props) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const [amount, setAmount] = useState();
  const [dayNaight, setDayNaight] = useState('Day');

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
      <Picker
        selectedValue={dayNaight}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setDayNaight(itemValue)}
      >
        <Picker.Item label="Día" value="Day" />
        <Picker.Item label="Noche" value="Night" />
      </Picker>
      <Button title='Add' onPress={() => dispatch(addNumber(numberElement))} />
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
});