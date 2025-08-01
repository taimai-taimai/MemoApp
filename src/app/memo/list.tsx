import React from 'react';
import { View, StyleSheet } from 'react-native';
import MemoListItem from '../../components/MomoListItem';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';
import { router } from 'expo-router';

const handlePress = (): void => {
    router.push('/memo/create');
}

const Index = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>
                < Icon name='plus' size={40} color='#ffffff' />
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

export default Index;