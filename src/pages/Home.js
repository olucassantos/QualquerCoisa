import React from 'react';
import { View } from 'react-native';

import estilo from '../style/pagina';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

import Categorias from '../components/Categorias';

const Home = () => {
    return (
        <View style={estilo.container}>
            <Logo />

            <Categorias />

            <Menu />
        </View>
    );
}

export default Home;