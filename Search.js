import React from 'react'
import globalStyle from './style'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import List from './List'

class Search extends React.Component{

    static navigationOptions = {

        title: "Recherche une ville"
    }

    constructor (props) {

        super(props)
        this.state = {

            city : 'Paris'
        }
    }

    setCity (city) {

        this.setState({city})
    }

    submit () {

        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return(
            <View style={styles.container}>
            <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setCity(text)}
        onSubmitEditing={() => this.submit()}
        value={this.state.city}
      />
      <Button style={styles.button} onPress={() => this.submit()} title="Rechercher"/>
      </View>
        );
    }
}

const navigationOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitle
}

export default createStackNavigator({

    Search: {

        screen: Search,
        navigationOptions
    },
    
    Result:{

        screen: List,
        navigationOptions
    }
    
    

    
})



const styles = StyleSheet.create({
    button: {

        backgroundColor: '#A2273C',
        color : '#A2273C',

    },

    container: {

        margin: 20
    }


});