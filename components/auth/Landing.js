import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native';

export default function Landing({navigation}) {
    return (
        <View style={styles.input}>
            <Button title="Sign Up" 
            onPress={()=> navigation.navigate("Sign Up")}
            />
             <Button title="Login" 
            onPress={()=> navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        justifyContent: 'center'
    }
})
