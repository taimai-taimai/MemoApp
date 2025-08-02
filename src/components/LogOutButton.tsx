import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const handlePress = (): void => {
    router.replace('/auth/login');
}

const LogOutButton = (): React.ReactElement => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.7)',
    }
})

export default LogOutButton;