import { View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';

const Create = (): React.ReactElement => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Header />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={""} multiline={true}/>
            </View>
            <CircleButton>
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
    }
})

export default Create;