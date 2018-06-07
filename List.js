import React from 'react'
import { Text, ActivityIndicator, ListView } from 'react-native'
import axios from 'axios'
import WeatherRow from './Row'

export default class List extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {

            title: `Météo / ${navigation.state.params.city}` 

        }
    }

    constructor(props) {

        super(props)

        console.log('state', this.props.navigation.state)

        this.state = {

            city: this.props.navigation.state.params.city,
            report: null
        }

        setTimeout(() => {
            this.fetchWeather()
        }, 1000)
        this.fetchWeather()
    }

    fetchWeather () {

        axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&cnt=10&appid=f513805255c080947d4115bc85cf923e`)
        .then((response) => {

            this.setState({report: response.data})
        })

    }

    render() {

        if (this.state.report === null) {
            return (

                <ActivityIndicator color= "#CC0000" size="large" />

            )
        } else {

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            

            return (

                <ListView
                dataSource={ds.cloneWithRows(this.state.report.list)}
                renderRow={(rowData, j, k) => <WeatherRow day={rowData} index={parseInt(k, 10)} />}
                />
            )
        }
    }
}