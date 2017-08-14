/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.instructions} onPress={()=>{*/}
          {/*const { navigate } = this.props.navigation;*/}
          {/*navigate('Detail2');*/}
        {/*}}>*/}
        {/*</Text>*/}

        <Text style={styles.instructions} onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('Detail1');
        }}>
          What do you believe? Click me to verify!
        </Text>
        {/*<Text style={styles.instructions}>*/}
          {/*当前页面的Tabbar是在App.js中通过最普通的方式自定义。*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions} onPress={()=>{*/}
          {/*const { navigate } = this.props.navigation;*/}
              {/*navigate('Detail2');*/}
        {/*}}>*/}
          {/*在Detail2中有reset和navigate的使用方法(点文字跳转)*/}
        {/*</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginTop:10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
    backgroundColor: '#F5FCFF',
  },
});

