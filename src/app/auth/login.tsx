import { View, StyleSheet, Text, TextInput } from 'react-native';
import Header from '../../components/Header';

const Login = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder='Email' />
                <TextInput placeholder='Password' />
                <View>
                    <Text>Submit</Text>
                </View>
                <View>
                    <Text>Not registered?</Text>
                    <Text>Sign up</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default Login;