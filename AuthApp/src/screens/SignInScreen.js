import React, { useState } from "react";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";
import { Input, Button, Card } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { AuthContext } from "../Provider/AuthProvider"

import { getDataJSON } from "../functions/AsyncStorageFunctions"
import { clockRunning } from "react-native-reanimated";



const image = { uri:'https://i.imgur.com/kxUyuPUh.png'};


const SignInScreen = (props) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (

        <AuthContext.Consumer>

            {(auth) => (<View style={styles.viewStyle}>

    <ImageBackground source={image} style={styles.image}>

        <Text style={styles.textStyle}>Welcome to Auth App</Text>



                <Card>
                    <Input
                        leftIcon={<MaterialCommunityIcons name="email-edit-outline" size={24} color="black" />}
                        placeholder='Enter your E-mail'
                        onChangeText={function (currentInput) {
                            setEmail(currentInput)
                        }}
                    />

                    <Input
                        leftIcon={<Ionicons name="md-key" size={24} color="black" />}
                        placeholder='Enter your Password'
                        secureTextEntry={true}
                        onChangeText={function (currentInput) {
                            setPassword(currentInput)
                        }}
                    />

                    <Button 
                        title='Sign In'
                        type='solid'
                        onPress={async function () {
                            let UserData = await getDataJSON(Email);
                            if (UserData.password == Password) {
                                auth.setisLoggedIn(true);
                                auth.setCurrentuser(UserData);
                            }
                            else {
                                alert("Login Failed!");
                                console.log(UserData);
                            }




                        }}
                    />

                    <Button
                        icon={<AntDesign name="user" size={24} color="black" />}
                        title="Don't Have Any Account? Sign Up"
                        type='clear'
                        onPress={function () {
                            props.navigation.navigate("SignUp");

                        }}
                    />

                </Card>
                </ImageBackground>
                

            </View>

            )}

        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        backgroundColor: '#060606'
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

export default SignInScreen;