import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, Alert } from 'react-native';
// import { showAlert } from '../components/Message';

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


const showAlert = () =>
    Alert.alert(
    "Error",
    "Credenciales no validas",
  );


const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const isUserValid = async () => {

        let response = await fetch(
            'http://161.97.71.194:5000/user/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: user,
                    password: pass
                })
            }
        );

        let json = await response.json();
        if (json.userId != undefined) {
            navigation.navigate('Home');
        } else {
            showAlert()
        }

    }

    return (
        <View style={styles.background}>
            <View>
                <Text>Usuario</Text>
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

export default Login;