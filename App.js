import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {creatAppContainer} from 'react-navigation'
import { createMaterialBottomNavigator} from 'react-navigation-tabs'
import readStoryScreen from './screens/readStoryScreen'
import writeStorySCreen from './screens/writeStoryScreen'

export default class App extends React.Component {
  render(){
    return(

      <AppContainer />

    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  ReadStory: {screen: readStoryScreen},
  writeStory: {screen: writeStorySCreen}
})

const appContainer = createAppContainer(TabNavigator)