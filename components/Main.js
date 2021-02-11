import React, { Component } from 'react'
import {View, Text} from 'react-native';

export class Main extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <View>
            <Text style={styles.loader}>User is Logged In</Text>
          </View>
        )
    }
}

export default Main
