import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>A propos de cette application</Text>
                <Text>L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est
                      reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du
                      "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans
                      leur version originale, accompagnée de la traduction anglaise de H. Rackham
                (1914).</Text>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    view: {

        margin: 20

    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },


});
