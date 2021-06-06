import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddNumber from '../components/AddNumber';
import SelectedNumbers from '../components/SelectedNumbers';


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
            <Text>Vender</Text>
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
            <ScrollView><Button title="Listo"/></ScrollView>
        </ScrollView>
    )
}

export default MainScreen;