import { View, StyleSheet, Text, 
    TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/button';

const SignUp = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Password' />
                <Button label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log in.</Text>
                    </TouchableOpacity>
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