import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../Provider/AuthProvider";





const NotificationComponent = (props) => {

    let type = undefined;

    if (props.title == "like") {
        type = "likes your post";


        return (
            <AuthContext.Consumer>
                {(auth) => (

                    <Card>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar
                                containerStyle={{ backgroundColor: "#1983ED" }}
                                rounded
                                icon={{
                                    name: "thumbs-o-up",
                                    type: "font-awesome",
                                    color: "white",
                                }}
                                activeOpacity={1}
                            />
                            <Text style={{ paddingHorizontal: 10 }}>{auth.Currentuser.name} {type}</Text>
                        </View>
                    </Card>


                )}
            </AuthContext.Consumer>
        );

    }

    else if (props.title == "comment") {

        type = "commented on your post";



        return (
            <AuthContext.Consumer>
                {(auth) => (

                    <Card>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar
                                containerStyle={{ backgroundColor: "#1983ED" }}
                                rounded
                                icon={{
                                    name: "comment",
                                    type: "font-awesome",
                                    color: "white",
                                }}
                                activeOpacity={1}
                            />
                            <Text style={{ paddingHorizontal: 10 }}>{auth.Currentuser.name} {type}</Text>
                        </View>
                    </Card>


                )}
            </AuthContext.Consumer>

        );


    }
}



    export default NotificationComponent;