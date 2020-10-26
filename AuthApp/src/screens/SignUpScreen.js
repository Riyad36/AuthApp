import React, { useState } from "react";
import { View,ImageBackground, Text, StyleSheet } from "react-native";
import { Input, Button, Card } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { storeDataJSON } from "../functions/AsyncStorageFunctions";

const image = { uri:'https://i.imgur.com/kxUyuPUh.png'};

const SignUpScreen = (props) => {

    const [Name, setName] = useState("");
    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (

        <View style={styles.viewStyle}>


    <ImageBackground source={image} style={styles.image}>


    <Text style={styles.textStyle}>Enter Your Information</Text>

            <Card> 

                <Input
                    leftIcon={<Feather name="user" size={24} color="black" />}
                    placeholder='Name'
                    onChangeText={function (currentInput) {
                        setName(currentInput)
                    }}
                />

                <Input
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                    placeholder='Student Id'
                    onChangeText={function (currentInput) {
                        setSID(currentInput)
                    }}
                />

                <Input
                    leftIcon={<MaterialCommunityIcons name="email-edit-outline" size={24} color="black" />}
                    placeholder='E-mail'
                    onChangeText={function (currentInput) {
                        setEmail(currentInput)
                    }}
                />

                <Input
                    leftIcon={<Ionicons name="md-key" size={24} color="black" />}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={function (currentInput) {
                        setPassword(currentInput)
                    }}


                />

                <Button
                    title='Sign Up'
                    type='solid'
                    onPress={function () {
                        let currentUser = {
                            name: Name,
                            sid: SID,
                            email: Email,
                            password: Password,
                        };

                        storeDataJSON(Email, currentUser);
                        props.navigation.navigate("SignIn")
                        



                    }}


                />

                <Button
                    title="Already have an account? Sign In"
                    type='clear'
                    onPress={function () {
                        props.navigation.navigate("SignIn");

                    }}
                />


            </Card>

            </ImageBackground>
        </View>


    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3E1F1F'
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      textStyle:{
          fontSize:30,
          color:'#ffffff',
          justifyContent:'center',
          textAlign:'center',
          marginBottom: 50,
     
      }
})

export default SignUpScreen;