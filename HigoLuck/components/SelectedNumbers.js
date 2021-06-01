import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeNumber } from '../store/Actions';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    image: {
        width: 100,
        height: 100,
    },
});

const SelectedNumbers = (props) => {
    const data = useSelector(state => state.listOfNumbers)
    const dispatch = useDispatch();
    return (
        <View style={styles.background}>

            {
                data.map(element =>
                    <View style={styles.container} key={element.number}>
                        <Text>Número {element.number}</Text>
                        <Text>Hora {element.dayNight}</Text>
                        <Text>Cantidad {element.amount}</Text>
                        <Icon
                            raised
                            name='trash'
                            size={15}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => dispatch(removeNumber(element.number))} />
                    </View>
                )
            }
        </View>
    )
}


export default SelectedNumbers;