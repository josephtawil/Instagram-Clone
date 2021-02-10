import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase';
// import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCu_FOsSisTqZEppxQDcLw8DKF2DYbRouA",
  authDomain: "instagramclone-7d61e.firebaseapp.com",
  projectId: "instagramclone-7d61e",
  storageBucket: "instagramclone-7d61e.appspot.com",
  messagingSenderId: "497538428966",
  appId: "1:497538428966:web:ae43e3424e32cce3b076e7",
  measurementId: "G-F4V5WTQCQP"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from "./components/auth/Landing";
import SignUp from "./components/auth/SignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Landing">
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

