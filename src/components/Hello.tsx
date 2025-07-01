import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Hello = (): React.ReactElement => {
    return (
        <View>
            <Text style={styles.text}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})

export default Hello;