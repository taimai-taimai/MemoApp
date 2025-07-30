import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';

const Edit = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <TextInput value="買い物リスト"/>
            </View>
            <CircleButton>
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})

export default Edit;