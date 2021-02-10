import React, { Component } from 'react'
import {TextInput, View, Button, StyleSheet} from 'react-native'

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Enter email" 
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput 
                    placeholder="Enter password" 
                    onChangeText={(password) => this.setState({password})}
                />
                <TextInput 
                    placeholder="Enter name" 
                    onChangeText={(name) => this.setState({name})}
                />
            </View>
        )
    }
}

export default SignUp
