import React from 'react'
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native'
import {connect} from 'react-redux'

 function Profile(props) {
     console.log(props)
     const {currentUser, posts} = props;
     console.log("User" + currentUser, posts)
    return (
        <SafeAreaView>
            <Text>{props.currentUser.name}</Text>
        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})

export default connect(mapStateToProps, null)(Profile);