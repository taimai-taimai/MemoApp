import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    children: string;
    bang?: boolean;
}

const Hello = (props: Props): React.ReactElement => {
    const {children, bang}  = props; // distructual assignment (分割代入): propsの中からchildrenを取り出す

    return (
        <View>
            <Text style={styles.text}>Hello {children} {bang === true ? '!' : ''} </Text>
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