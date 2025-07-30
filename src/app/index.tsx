import { Redirect } from 'expo-router'; 

const Index = (): React.ReactElement => {
    return <Redirect href="/auth/login" />
}

export default Index;