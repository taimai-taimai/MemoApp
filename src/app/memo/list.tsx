import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useEffect } from 'react';
import MemoListItem from '../../components/MomoListItem';
import CircleButton from '../../components/CircleButton';
import LogOutButton from '../../components/LogOutButton';
import Icon from '../../components/icon';
import { router, useNavigation } from 'expo-router';

const handlePress = (): void => {
    router.push('/memo/create');
}

const Index = (): React.ReactElement => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <LogOutButton />
            )
        })
    }, [])
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