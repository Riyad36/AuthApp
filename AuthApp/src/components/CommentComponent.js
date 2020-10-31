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



const CommentComponent= (props) => {

    return(


            <Card>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar
                        containerStyle={{ backgroundColor: "cyan" }}
                        rounded
                        icon={{
                            name: "thumbs-o-up",
                            type: "font-awesome",
                            color: "black",
                        }}
                        activeOpacity={1}
                    />
                    <Text style={{ paddingHorizontal: 10 }}>
                        Pam Beesley Liked Your Post.
              </Text>
                </View>
            </Card>


    )


}

export default CommentComponent;