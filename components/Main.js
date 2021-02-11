import React, { Component } from 'react'
import {View, Text} from 'react-native';
//connecting redux 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../components/redux/actions/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Feed from './main/Feed';

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main)
