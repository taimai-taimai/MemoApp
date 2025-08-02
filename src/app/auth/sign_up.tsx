import { View, StyleSheet, Text, 
    TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config';
import Button from '../../components/button';

const handlePress = (email: string, password: string): void => {
    // サインアップ処理
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
            router.replace('/memo/list');
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            Alert.alert(error.message);
        });
}

const SignUp = (): React.ReactElement => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email Address' 
                    value={email} 
                    onChangeText={(text) => setEmail(text)} 
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    value={password} 
                    onChangeText={(text) => setPassword(text)} 
                    autoCapitalize='none'
                    secureTextEntry
                    textContentType='password'
                />
                <Button label='Submit' onPress={() => handlePress(email, password)}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/login' asChild replace={true}>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log in.</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f0f8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        borderWidth: 1,
        height: 48,
        padding: 8,
        fontSize: 18,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000',
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3',
    },
})

export default SignUp;