import React, { useState } from "react";
import { View, Image, ImageBackground, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
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

            <TouchableOpacity>

              <Image
                marginTop={50}
                style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                resizeMode="contain"
                alignSelf="center"
                source={require('./../../assets/leo.jpg')}
              />

            </TouchableOpacity>



            <Text></Text>


            <Text style={styles.textStyle2}>{auth.Currentuser.name}</Text>

            <View
              style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
            >
              <Button
                type="solid"
                title="Delete Profile"
              />

            </View>


            <Text style={styles.textStyle3}>Here's Detail About {auth.Currentuser.name}</Text>




            <Card.Divider></Card.Divider>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15 }}>
              <FontAwesome name="calendar" size={24} color="black" />
              <Text style={styles.textStyle}>Born On 24th June, 1987</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15 }}>
              <MaterialIcons name="place" size={24} color="black" />
              <Text style={styles.textStyle}>Address: Rosario, Argentina</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15 }}>
              <MaterialIcons name="work" size={24} color="black" />
              <Text style={styles.textStyle}>Works At, Argentina, Barcelona</Text>
            </View>
            <Card.Divider></Card.Divider>

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
    marginStart: 20,
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
    textAlign: 'center'

  },

  textStyle3: {
    fontSize: 15,
    color: "#000000",
    justifyContent: 'center',
    marginVertical: 20,
    textAlign: 'center'

  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default ProfileScreen;