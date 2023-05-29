import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

import Categoria from './Categoria';

const Categorias = () => {
    const [categorias, setCategorias] = React.useState(null)
    let url = "http://localhost:3001/categorias/";

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                // 'then' executa depois que a requisição acaba
                setCategorias(response.data);
            })
            .catch((error) => {
                // 'catch' executa quando acontece um erro
                alert('Desculpe, deu errado.');
            })
    }, []);

    if (!categorias) return null;

    const listaCategorias = categorias.map((categoria) => {
        return <Categoria key={categoria.id} categoria={categoria} />
    });

    console.log(listaCategorias);

    return (
        <ScrollView style={estilo.categorias}>
            { listaCategorias }
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    categorias: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: 10,
        padding: 10,
    }
});

export default Categorias;