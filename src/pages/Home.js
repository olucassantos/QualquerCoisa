import React from 'react';
import { View } from 'react-native';

import estilo from '../style/pagina';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <View style={estilo.container}>
            <Logo />

            <Menu />
        </View>
    );
}

export default Home;