import React from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

const DadosInfo = props =>{
    const {titulo, dado} = props;
    return(
        <View style={styles.info}>
            <Text style={styles.infoTitulo}>{titulo}</Text>
            <Text style={styles.dado}>{dado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    info:
    {
        flex: 1,
        alignItems: 'center',
    },

    infoTitulo:
    {
        color: '#45b2fc',
        fontSize: 18,
        fontWeight: 'bold',
    },

    dado:
    {
        fontSize: 16,
        color: '#2b4274',
    },
});

export default DadosInfo;