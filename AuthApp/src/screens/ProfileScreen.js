import React, { useState } from "react";
import { View, Image, ImageBackground, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../Provider/AuthProvider";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const image = { uri: 'https://i.imgur.com/kxUyuPUh.png' };

const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setisLoggedIn(false);
                auth.setCurrentuser({});
              },
            }}
          />

          <ImageBackground source={image} style={styles.image}>

              <Image
                marginTop={50}
                style={{ width: 200, height: 200, }}
                resizeMode="contain"
                alignSelf="center"
                source={require('./../../assets/photo.jpg')}
              />



              <Text style={styles.textStyle2}>{auth.Currentuser.name}</Text>

              <Button
                title='Delete Profile'
                type='outline'
              />


          <Text style={styles.textStyle2}>Here's Detail About {auth.Currentuser.name}</Text>
 
            <Text></Text>
            

            

            <Card.Divider></Card.Divider>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,marginStart:10}}>
              <FontAwesome name="calendar" size={24} color="black"/>
              <Text style={styles.textStyle}>Born On 15th March,1997</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,marginStart:10}}>
              <MaterialIcons name="place" size={24} color="black" />
              <Text style={styles.textStyle}>Address: Pabna Sadar,pabna</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,marginStart:10}}>
              <MaterialIcons name="work" size={24} color="black" />
              <Text style={styles.textStyle}>Works At, SamSung RnD</Text>
            </View>
            <Card.Divider></Card.Divider>

            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>




          </ImageBackground>

        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    padding: 10,
    marginStart:20,
  },
  viewStyle: {
    justifyContent: 'flex-start',
    flex: 1,
  },

  textStyle2: {
    fontSize: 25,
    color: "#000000",
    justifyContent: 'center',
    marginVertical: 20,
    marginTop: 40,
    textAlign: 'center'

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default ProfileScreen;