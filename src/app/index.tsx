import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View> 

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年07月02日 10:00</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年07月02日 10:00</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>test</Text>
                        <Text>2024年07月02日 10:00</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Index;