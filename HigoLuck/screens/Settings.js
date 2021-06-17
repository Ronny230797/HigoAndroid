import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

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

const Settings = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.background}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    placeholder = {'Nombre'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    placeholder = {'Correo'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    placeholder = {'Usuario'}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder = {'Contraseña'}
                />
            </View>
            <View>
                <Button title="Ingresar" onPress={() => isUserValid()} />
            </View>
        </View>
    )
}

export default Settings;