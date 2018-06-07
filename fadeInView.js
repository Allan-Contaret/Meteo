import React from 'react'
import { Animated, Dimensions } from 'react-native'

export default class fadeInView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            pan: new Animated.ValueXY({ x: 200, y: 0 })
        }
    }

    componentDidMount() {
        Animated.sequence([
            Animated.delay(this.props.delay),
            Animated.spring(
                this.state.pan,
                {
                    toValue: { x: 0, y: 0 }
                }
            )
        ]).start()

    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: this.state.pan.getTranslateTransform()
                }}>
                {this.props.children}
            </Animated.View>
        )
    }
}