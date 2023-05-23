import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Easing } from "react-native-reanimated";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

const Categoria = ({ categoria }) => {
    const [visivel, setVisivel] = React.useState(false);
    const altura = useSharedValue(0);
    const opacity = useSharedValue(1);

    useEffect(() => {
        console.log("Visivel:", visivel);

        if (visivel) {
            altura.value = withTiming(300, {
                duration: 500,
                easing: Easing.linear,
            });
        } else {
            altura.value = withTiming(0, {
                duration: 500,
                easing: Easing.linear,
            });
        }
    }, [visivel]);

    const mudaVisibilidade = () => {
        setVisivel(!visivel);
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: altura.value,
            opacity: 1,
        };
    });

    return (
        <View style={estilos.categoria}>
            <TouchableOpacity onPress={mudaVisibilidade}>
                <View style={estilos.container}>
                    <Text style={estilos.titulo}>{categoria.titulo}</Text>

                    <View>
                        <Icon
                            name={visivel ? "down" : "up"}
                            size={30}
                            color="#000"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <Animated.View style={[estilos.caixa, animatedStyle]}>
                {visivel && (
                    <Text>teste</Text>
                )}
            </Animated.View>
        </View>
    );
}

const estilos = StyleSheet.create({
    categoria: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    caixa: {
        height: 1,
        width: '99%',
        backgroundColor: 'red',
    },
});

export default Categoria;