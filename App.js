import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground 
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require("./src/img/waterbg.png")}
          style={styles.bgImage}
        >
          <View>
            <View style={styles.containerInfo}>
              <View style={styles.info}>
                <Text style={styles.infoTitulo}>Meta</Text>
                <Text style={styles.dado}>2000ml</Text>
                <Text></Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.infoTitulo}>Consumido</Text>
                <Text style={styles.dado}>500ml</Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.infoTitulo}>Status</Text>
                <Text style={styles.dado}>insuficiente</Text>
              </View>
            </View>

            <View style={styles.comtainerPercent}>
              <Text style={styles.textPercent}>25%</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 20
  },

  bgImage:
  {
    flex: 1,
    width: null,
  },
  containerInfo:
  {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },

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

  comtainerPercent:
  {
    
  },



});
