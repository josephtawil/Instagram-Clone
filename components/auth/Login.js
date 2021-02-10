import React, { Component } from 'react'
import {TextInput, View, Button, StyleSheet} from 'react-native'
import firebase from 'firebase';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignIn = () => {
        const { email, password } = this.state;
        firebase.
        auth().
        signInWithEmailAndPassword(email, password)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
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
                    secureTextEntry = {true} 
                    onChangeText={(password) => this.setState({password})}
                />
                <Button title="Sign In"
                onPress={()=> this.onSignIn()}
                />
            </View>
        )
    }
}

export default Login
