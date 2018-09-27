import React from 'react';
import{
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

const Botao = props =>{
    return(
        <TouchableOpacity
            style={
                [
                    {backgroundColor:props.corBotao}, 
                    styles.button
                ]
            }

            onPress={props.executar}
          > 
            <Text style={styles.textButton}>{props.textBotao}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:
    {
        padding: 5,
        borderRadius: 8,
        height: 40,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        margin: 15,
    },

    textButton:
    {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
});

export default Botao;