import React, { Component } from 'react'
import {View, Text} from 'react-native';
//connecting redux 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, fetchUserPosts} from '../components/redux/actions/index';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
//we're using a new package here
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
   //we use an empty screen component as a way of not getting an error so when clicked on this tab it will navigate
   //to the AddScreen component in App.js
const EmptyScreen = () => {
    return(null);
}
import Feed from './main/Feed';
import Add from './main/Add';
import Profile from './main/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchUserPosts();
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
            <Tab.Screen name="Feed" component={Feed} 
            options = {{
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                )
            }}
             />
          
        <Tab.Screen name="AddContainer" component={EmptyScreen} 
            listeners={({ navigation})=> ({
                tabPress: event =>{
                    event.preventDefault();
                    navigation.navigate("Add")
                }
            })}
            options = {{
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name="camera" color={color} size={26}/>
                )
            }}
             />
              <Tab.Screen name="Profile" component={Profile} 
            options = {{
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
                )
            }}
             />
          </Tab.Navigator>
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main)
