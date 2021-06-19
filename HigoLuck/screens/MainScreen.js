import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddNumber from '../components/AddNumber';
import SelectedNumbers from '../components/SelectedNumbers';
import PrintBill from '../components/PrintBill';

const MainScreen = (props) => {
    const [data, setData] = useState([]);

    const AddNumberToShopping = (element) =>{
        setData([...data,element])
    }

    const RemoveNumberFromCarShopping = (id) =>{
        let newArray = data.filter(x => x.number != id);
        setData(newArray);
    }

    return (
        <ScrollView>
            <View>
            <AddNumber 
            InsertNumber = {AddNumberToShopping}
            />
            </View>
            <View>
            <SelectedNumbers 
            data = {data} 
            RemoveNumber = {RemoveNumberFromCarShopping}
             />
            </View>
            <ScrollView>
            <PrintBill />
            </ScrollView>
            
        </ScrollView>
    )
}

export default MainScreen;