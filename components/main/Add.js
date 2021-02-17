import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
      if(camera){
        const data = await camera.takePictureAsync(null);
        console.log(data.uri);
        setImage(data.uri);
      }
  }
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
    <View style={styles.cameraContainer}>
      <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} ratio={'1:1'} type={type}/>
    </View>
    <Button
    title="Flip Image"
    onPress={() => {
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }}>
    
  </Button>
  <Button title="Take Picture" onPress={() => {
    takePicture();
  }}/>
  {image && <Image  source={{uri: image}} style={styles.images}/>}
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio:{
    flex: 1,
    aspectRatio: 1
  },
  images: {
    flex: 1,

  }
})