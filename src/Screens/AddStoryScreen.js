import { StyleSheet, Text, TouchableOpacity, View, Image, Permission, Platform, PermissionsAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import { CameraRoll, useCameraRoll } from '@react-native-camera-roll/camera-roll';

const AddStoryScreen = () => {

  const [photos, setPhotos] = useState([]);

  async function hasAndroidPermission() {
    const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const onGetPhotoClick = async () => {

    hasAndroidPermission()

     CameraRoll.getPhotos({
      first : 100,
      assetType : 'Photos'
    })
     .then((Response) => {
      const data = Response.edges

      const imageData = [];

      data.forEach((ele) => {
        imageData.push(ele.node.image.uri);
      })

      setPhotos([...imageData]);

     })
     .catch((error) => {
      console.log(error)
     })
  }

  return (
    <CommonContainer>
      <TouchableOpacity style={{padding: 100,backgroundColor:'red'}}
        onPress={() => onGetPhotoClick()}
      >
        <Text>hhhhh</Text>
      </TouchableOpacity>

      <ScrollView>
        {
          photos.map((ele,index) => {
            return(
              <View key={index}>
                <Image
                  source={{ uri : ele }}
                  style={{
                    height : 120,
                    width : 120
                  }}
                />
              </View>
            )
          })
        }
      </ScrollView>
    </CommonContainer>
  )
}

export default AddStoryScreen

const styles = StyleSheet.create({})