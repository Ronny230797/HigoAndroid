import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

const showAlert = (message, title) =>
    Alert.alert(
    `${title}`,
    `${message}`,
  );

const Settings = (props) => {
    
    const [id, setId] = useState('0');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const insertOrUpdate = async () => {

        if(id != '' && name != '' && email != '' && user != '' && pass != ''){
            let response = await fetch(
                'http://161.97.71.194:5000/user',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: id,
                        name: name,
                        email: email,
                        userName: user,
                        password: pass
                    })
                }
            );

            let json = await response.json();

            if (json.Status == 'Ok') {
                showAlert('Se insertó o actualizó correctamente el usuario', 'Exito')
            } else {
                showAlert('Fallo al insertar o actualizar el usuario', 'Error')
            }

        }else{
            showAlert('Hacen falta campos obligatorios', 'Error')
        }

    }

    return (
        <View style={styles.background}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    placeholder={'Id'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder={'Nombre'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder={'Correo'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    placeholder={'Usuario'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder={'Contraseña'}
                />
            </View>
            <View>
                <Button title="Ingresar" onPress={() => insertOrUpdate()} />
            </View>
        </View>
    )
}

export default Settings;