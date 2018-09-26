import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/img/relogio.png')}
          style={styles.relogioImage}
        />

        <View style={styles.containerButtons}>

          <TouchableOpacity
            style={[styles.botaoStartStop, styles.button]}
            onPress={()=>{}}
          > 
            <Text style={styles.textButton}>START</Text>
          </TouchableOpacity>

            <TouchableOpacity
            style={[styles.botaoReset, styles.button]}
            onPress={()=>{}}
          > 
            <Text style={styles.textButton}>RESET</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerButtons:
  {
    flexDirection: 'row',
    marginTop: 30
  },

  button:
  {
    padding: 5,
    borderRadius: 8,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  botaoStartStop:
  {
    backgroundColor: '#28a745',
    borderWidth: 1,
    borderColor: '#28a745',
    marginRight: 50,
  },

  botaoReset:
  {
    backgroundColor: '#e0a800',
    borderWidth: 1,
    borderColor: '#e0a800',
  },

  textButton:
  {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }


});
