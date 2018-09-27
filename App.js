import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';

import Botao from './src/component/Botao'

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      timer: 0,
      botaoText: 'START',
    }

    this.tempo = null;

    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

  start()
  { 
    if( this.tempo == null )
    {
        this.tempo = setInterval(()=>{
        let s = this.state;
        s.timer += 0.1;
        s.botaoText = 'STOP';
        this.setState(s);
      },100);
    }
    else
    {
      let s = this.state;
      clearInterval(this.tempo);
      s.botaoText = 'START';
      this.setState(s);
      this.tempo = null;
    }
  }

  reset()
  {
    let s = this.state;

    if( this.tempo != null )
    {
      clearInterval(this.tempo);    
    }
    
    s.timer = 0;
    s.botaoText = 'START';
    this.setState(s);
    this.tempo = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/img/relogio.png')}
          style={styles.relogioImage}
        />
        <Text style={styles.textTimer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.containerButtons}>         
          <Botao corBotao='#28a745' textBotao={this.state.botaoText} executar={()=>{this.start()}} />
          <Botao corBotao='#e0a800' textBotao='RESET' executar={()=>{this.reset()}} />
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
    marginTop: 80,
    justifyContent: 'space-around',
  },

  textTimer:
  {
    color: '#baa07a',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: -135,
  },
});
