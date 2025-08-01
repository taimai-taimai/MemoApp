import { View, StyleSheet, Text, 
    TextInput, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import Button from '../../components/button';

const Login = (): React.ReactElement => {

    const handlePress = (): void => {
        // ログイン処理
        router.push('/memo/list');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Password' />
                <Button label='Submit' onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up</Text>
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

export default Login;