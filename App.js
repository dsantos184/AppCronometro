import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import DadosInfo from './src/component/DadosInfo';
import CalculaConsumo from './src/util/CalculaConsumo';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      meta: 2000,
      consumido: 0,
      status: 'Ruim',
      percent: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require("./src/img/waterbg.png")}
          style={styles.bgImage}
        >
          <View style={styles.containerSuperior}>
            <View style={styles.containerInfo}>

              <DadosInfo titulo='Meta' dado={`${this.state.meta}ml`} />

              <DadosInfo titulo='Consumido' dado={`${this.state.consumido}ml`} />

              <DadosInfo titulo='Status' dado={this.state.status} />

            </View>
          </View>

          <View style={styles.containerInferior}>

            <View style={styles.containerInferiorText}>
              <Text style={styles.textPercent}>{`${this.state.percent}%`}</Text>
            </View>

            <View style={styles.containerIferiorBotao}>
              <TouchableOpacity 
                onPress={()=>{                 
                  let objDados = CalculaConsumo(this.state);
                  this.setState(objDados);
                }}
                style={styles.botao}
              >
                <Text style={styles.textBotao}>Beber 200ml</Text>
              </TouchableOpacity>
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

  containerSuperior:
  {
    flex: 3,
  },

  containerInferior:
  {
    flex: 7,
  },

  containerInferiorText:
  {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerIferiorBotao:
  {
    flex: 2,
    alignItems: 'center',
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

  textPercent:
  {
    fontSize: 50,
    color: "#fff",
    fontWeight: 'bold'
  },

  botao:
  {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    elevation: 3
  },

  textBotao:
  {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b4274',
  }

});
