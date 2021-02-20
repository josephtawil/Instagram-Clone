import React,{ useState} from 'react'
import {SafeAreaView,Button, View, Text, TextInput, Image} from 'react-native';

export default function SaveImage(props) {
    console.log(props.route.params.image)

    const [caption, setCaption] = useState('');

    return (
        <View style={styles.image}>
            <Image source={{uri: props.route.params.image}}/>
            <TextInput placeholder="Write a caption ..."
                onChangeText={(caption)=> setCaption(caption)}
            />
            <Button title="Save"/>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
    }
})