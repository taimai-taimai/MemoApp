import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    label: string;
    onPress?: () => void; // 返り値がない関数
}

const Button = (props: Props): React.ReactElement => {
    const { label, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
})

export default Button;