import { View, StyleSheet, TextInput, Alert} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';

import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';
import { auth, db } from '../../config';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView';

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) {
        return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    setDoc(ref, {
        bodyText, 
        updatedAt: Timestamp.now() 
    }).then(() => {
        router.back();
    }).catch((error) => {
        Alert.alert('メモの保存に失敗しました');
    });

}

const Edit = (): React.ReactElement => {
    const id = useLocalSearchParams().id as string;
    const [bodyText, setBodyText] = useState<string>('');
    useEffect(() => {
        if (auth.currentUser === null) {
            return;
        }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
        getDoc(ref).then((docRef) => {
            const RemotoBodyText = docRef.data()?.bodyText;
            setBodyText(RemotoBodyText);
        })
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                value={bodyText} 
                multiline={true}
                onChangeText={(text) => setBodyText(text)}
                autoFocus={true}
            />
            </View>
            <CircleButton onPress={() => handlePress(id, bodyText)}>
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
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        textAlignVertical: 'top',
        paddingVertical: 32,
        paddingHorizontal: 27,
        lineHeight: 24,
    }
})

export default Edit;