import React from 'react';
import { Text, View, StyleSheet, type TextStyle } from 'react-native';

interface Props {
    children: string;
    bang?: boolean;
    style?: TextStyle;
}

const Hello = (props: Props): React.ReactElement => {
    const {children, bang, style}  = props; // distructual assignment (分割代入): propsの中からchildrenを取り出す
    
    // styleをpropsで渡すことで、styleを上書きできる(後のstyleが優先される)
    return (
        <View>
            <Text style={[styles.text, style]}>Hello {children} {bang === true ? '!' : ''} </Text> 
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