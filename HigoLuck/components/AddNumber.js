import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert,TouchableOpacity } from 'react-native';
import { addNumber } from '../store/Actions';
import { useDispatch } from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { Checkbox, List, Switch } from 'react-native-paper';


const AddNumber = (props) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const [amount, setAmount] = useState();
  const [dayNaight, setDayNaight] = useState('Day');
  const [value, setValue] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  let numberElement = {
    number: number,
    amount: amount,
    dayNight: dayNaight
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="Número"
          keyboardType="numeric"
          maxLength={2}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Monto"
          keyboardType="numeric"
          maxLength={5}
        />
      </View>
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

      <View style={styles.containerB}>
      <View>
        <Text>Reventado</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.InsertNumber(numberElement)}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
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
  containerB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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