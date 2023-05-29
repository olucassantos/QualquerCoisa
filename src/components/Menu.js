import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import estilo from '../style/pagina';

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