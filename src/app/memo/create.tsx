import { View, StyleSheet, TextInput} from 'react-native';
import { router } from 'expo-router';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';

import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';
import { auth, db } from '../../config';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView';

const handlePress = (bodyText: string) => {
    if (!auth.currentUser) {
        return;
    }
    const ref = collection(db,`users/${auth.currentUser.uid}/memos`);
    // メモを追加
    addDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.now(),
    })
    .then((docRef) => {
        console.log("success", docRef.id);
        router.back();
    })
    .catch((error) => {
        console.log(error);
    })
    /*
    await addDoc(collection(db, "memos"), {
    bodyText: "test2",
   })
   .then(() => {
    router.back();
   })
   .catch((error) => {
    console.log(error);
   })
    */
}

const Create = (): React.ReactElement => {
    const [bodyText, setBodyText] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                value={bodyText} 
                onChangeText={(text) => setBodyText(text)}
                multiline={true}
                autoFocus={true}/>
            </View>
            <CircleButton onPress={() => handlePress(bodyText)}>
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