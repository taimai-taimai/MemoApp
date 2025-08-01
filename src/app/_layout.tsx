import { Stack } from 'expo-router';

const Layout = (): React.ReactElement => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#467fd3",
            },
            headerTintColor: "#ffffff",
            headerTitle: "Memo App",
            headerBackTitle: "Back",
            headerTitleStyle: {
                fontSize: 22,
                fontWeight: "bold",
            },
        }}/>
    )
}

export default Layout;