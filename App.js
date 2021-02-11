import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './components/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
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
import Login from "./components/auth/Login";
import MainScreen from './components/Main';
import AddScreen from "./components/main/Add";

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      loggedIn: false, 
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  render() {
    const {loggedIn, loaded} = this.state;

    if(!loaded){
      return(
        <View>
          <Text style={styles.loader}>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
    return (
      <NavigationContainer initialRouteName="Landing">
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
    }

    return(
      <Provider store={store}>
          <NavigationContainer initialRouteName="Main">
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} options={{
            headerShown: false,
          }} />
               <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
       
      </Provider>
        
    )
  }
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App



