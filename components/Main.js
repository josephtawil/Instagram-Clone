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
        return (
            <View>
            <Text style={styles.loader}>User is Logged In</Text>
          </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(null, mapDispatchToProps)(Main)
