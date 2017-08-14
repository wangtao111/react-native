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
    TextInput
} from 'react-native';

export default class Detail1 extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>我的</Text>
        ),
    });
    constructor(props) {
      super(props);
      this.state = {text: ''};
    }
    componentDidMount(){
        // 通过在componentDidMount里面设置setParams将title的值动态修改
        this.props.navigation.setParams({
            headerTitle:'Detail1',
            navigatePress:this.navigatePress,
        });
    }

    navigatePress = () => {
        alert('点击headerRight');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Please say three truths you believe and press the space key to verify!
                </Text>
                <View style={{padding: 10, width: 200}}>
                    <TextInput
                      style={{height: 40}}
                      placeholder="请输入中文!"
                      onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 15}}>
                      {(() => {
                        const len = this.state.text.split(' ').length;
                        if(len === 1){
                          return null;
                        } else if(len === 2){
                          return '😈哦，你放了个💨'
                        }else if(len === 3){
                          return '😈哦,no，你又放了一个💨'
                        }else if(len === 4){
                          return '😈哦,my god!，你拉出来了💨！'
                        }else {
                          return '二傻子，还不快去擦屁屁';
                        }
                      })()}
                    </Text>
                </View>
                <Text style={styles.instructions} onPress={()=>{
                    const { navigate } = this.props.navigation;
                      navigate('Test2');
                }}>
                  进入下一题
                </Text>
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize:18
    },
});

