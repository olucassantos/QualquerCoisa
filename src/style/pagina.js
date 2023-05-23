import { StyleSheet } from "react-native"

const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    conteudo: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#cecece',
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#cecece',
        width: '100%'
    },
    menuItem: {
        flex: 1,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        flexGrow: 1,
        alignItems: 'center'
    }
});

export default estilo;