import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import About from './About'
import Search from './Search'
import { createBottomTabNavigator } from 'react-navigation'


const Tabs = createBottomTabNavigator({

  Search : { screen: Search, 
    navigationOptions: {
			tabBarIcon: ({ focused, tintColor }) => {
				return <Ionicons
					name="ios-search"
					size={26}
					color={tintColor}
				/>
			}
		}},
  About: { screen: About,
    navigationOptions: {
			tabBarIcon: ({ focused, tintColor }) => {
				return <Ionicons
					name="ios-contact"
					size={26}
					color={tintColor}
				/>
      }
    }
   }


}, {
  tabBarPosition: 'bottom',
  tabBarOptions:{
    style: {
      backgroundColor: "#a2273C",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  }
  
  

})

export default class App extends React.Component {

  
  render() {
    return (
      <View style={{flex: 1}}>

        <Tabs />
      </View>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
