import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

import MemoListItem from '../../components/MomoListItem';
import CircleButton from '../../components/CircleButton';
import LogOutButton from '../../components/LogOutButton';
import Icon from '../../components/icon';
import { router, useNavigation } from 'expo-router';
import { auth, db } from '../../config';
import { type Memo } from '../../../types/memo';

const handlePress = (): void => {
    router.push('/memo/create');
}

const Index = (): React.ReactElement => {
    const [memos, setMemos] = useState<Memo[]>([]);
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <LogOutButton />
            )
        })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) {
            return;
        }
        const ref = collection(db,`users/${auth.currentUser.uid}/memos`);
        const q = query(ref, orderBy('updatedAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = [];
            snapshot.forEach((doc) => {
                const { bodyText, updatedAt } = doc.data();
                remoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt,
                })
            })
            setMemos(remoteMemos);
        })
        return () => unsubscribe(); // 画面が消えたタイミングでunsubscribeを呼び出す
    }, [])
    return (
        <View style={styles.container}>
            <FlatList 
            data={memos}
            renderItem={({ item }) => <MemoListItem memo={item} />}
            keyExtractor={(item) => item.id}
            />
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