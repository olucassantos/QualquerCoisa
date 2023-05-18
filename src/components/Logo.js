import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image style={estilo.logo} source={require('../assets/logo.png')} />
        </View>
    );
}

const estilo = StyleSheet.create({
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    }
});

export default Logo;