import React, { Component } from 'react'
import {View, Text} from 'react-native';
//connecting redux 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../components/redux/actions/index';

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const {currentUser} = this.props

        console.log(currentUser);
        return (
            <View>
            <Text>User is Logged In</Text>
          </View>
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main)
