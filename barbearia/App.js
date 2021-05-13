import React from 'react';
import Cenas from './src/Scenes'
import {AppRegistry} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <Cenas/>
    );
  }
}

AppRegistry.registerComponent('App',()=>App)

