import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Stack from './Stack/Stack';
import Switch from './Switch/Switch';

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}>
          <Switch/>
        </View>
    );
  }
}


