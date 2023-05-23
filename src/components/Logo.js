import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={estilo.container}>
            <Image style={estilo.logo} source={require('../../assets/icon.png')} />
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: 'blue'
    },
    logo: {
        width: 100,
        height: 100,
    }
});

export default Logo;