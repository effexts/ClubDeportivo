/** @format */
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'ClubDeportivo'} />
    <AlbumList />
  </View>
);

//import { AppRegistry } from 'react-native';
//import App from './App';
//import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ClubDeportivo', () => App);
