import { View, StyleSheet, Text } from 'react-native';

type Props = {
    label: string;
}

const Button = (props: Props): React.ReactElement => {
    const { label } = props;
    return (
        <View style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </View>
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