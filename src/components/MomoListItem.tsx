import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { doc, deleteDoc } from 'firebase/firestore';

import { auth, db } from '../config';
import Icon from './icon';
import { type Memo } from '../../types/memo';

interface Props {
    memo: Memo;
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) {
        return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    Alert.alert('メモを削除しますか？', '', [
        {
            text: 'キャンセル',
        },
        {
            text: '削除する',
            style: 'destructive',
            onPress: () => {
                deleteDoc(ref).then(() => {
                    console.log('success');
                }).catch((error) => {
                    Alert.alert('メモの削除に失敗しました');
                });
            }
        }
    ]);
}

const MemoListItem = (props: Props): React.ReactElement => {
    const { memo } = props;
    const { bodyText, updatedAt } = memo;
    if (bodyText === "" || updatedAt === null) {
        return <></>;
    }
    const formattedDate = updatedAt.toDate().toLocaleString("ja-JP");
    return (
                <Link 
                    href={{
                        pathname: '/memo/detail',
                        params: {
                            id: memo.id,
                        },
                    }}
                    asChild
                >
                    <TouchableOpacity style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle} numberOfLines={1}>{memo.bodyText}</Text>
                        <Text style={styles.memoListItemDate}>{formattedDate}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handlePress(memo.id)}>
                        <Icon name='delete' size={32} color='#b0b0b0' />
                    </TouchableOpacity>
                </TouchableOpacity>
                </Link>
    )
}

const styles = StyleSheet.create({
        memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
})

export default MemoListItem;
