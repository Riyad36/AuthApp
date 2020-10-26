import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Card,
  Button,
  Text,
  Avatar,
  Input,
  Header,
} from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";

import PostComponent from "../components/PostComponent"



const HomeScreen = (props) => {

  return(
  
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
          <Card>
            <Input
              placeholder="What's On Your Mind?"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
            />
            <Button title="Post" type="outline" onPress={function () { }} />
          </Card>




          <ScrollView>

            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>
            <PostComponent></PostComponent>


          

          </ScrollView>


        </View>
      )}
    </AuthContext.Consumer>
  );
  
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
}
);

export default HomeScreen;