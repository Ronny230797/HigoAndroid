import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, Button } from 'react-native';
import AddNumber from '../components/AddNumber';
import SelectedNumbers from '../components/SelectedNumbers';

// let data = [
//     // {
//     //     number: 15,
//     //     amount: 500,
//     //     dayNight: 'Day'
//     // },
//     // {
//     //     number: 23,
//     //     amount: 700,
//     //     dayNight: 'Day'
//     // },

// ];


const InsertNumber = (object) => {
    console.log(object);
    // data.push(object);
}

let message = () =>{
    return ` hello x`;
}

const MainScreen = (props) => {
    const [comment, setComment] = useState('Hello My people');
    const [data, setData] = useState([]);

    const ChangeText = (txt) =>{
        setComment(txt);;
    }

    const AddElementArray = (element) =>{
        setData([...data,element])
    }

    return (
        <View>
            <Text>Vender</Text>
            <View>
            <AddNumber 
            InsertNumber = {AddElementArray}
            />
            </View>
            <View>
            <SelectedNumbers 
            data = {data} 
            texto = {comment} />
            </View>
        </View>
    )
}

export default MainScreen;