import React from 'react';
import { View, Text } from 'react-native';

import estilo from '../style/pagina';
import { TouchableOpacity } from 'react-native-web';

const Menu = () => {
    return (
        <View style={estilo.menu}>
            <TouchableOpacity style={estilo.menuItem}>
                <View>
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.menuItem}>
                <View>
                    <Text>Categorias</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.menuItem}>
                <View>
                    <Text>Bloquear</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;