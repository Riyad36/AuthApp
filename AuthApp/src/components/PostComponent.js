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


const PostComponent = () => {

    const post =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (

        <AuthContext.Consumer>
            {(auth) => (
                <Card>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            containerStyle={{ backgroundColor: "#ffab91" }}
                            rounded
                            icon={{ name: "user", type: "font-awesome", color: "black" }}
                            activeOpacity={1}
                        />
                        <Text h4Style={{ padding: 10 }} h4>{auth.Currentuser.name}</Text>
                    </View>
                    <Text style={{ fontStyle: "italic" }}> Posted on 10 Aug, 2020</Text>
                    <Text
                        style={{
                            paddingVertical: 10,
                        }}
                    >
                        {post}
                    </Text>
                    <Card.Divider />
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <Button
                            type="outline"
                            title="  Like (21)"
                            icon={<AntDesign name="like2" size={24} color="dodgerblue" />}
                        />
                        <Button
                            type="solid"
                            title="Comment (7)"
                            onPress={function () {
                                auth.setisLoggedIn(true);
                                props.navigation.navigate("Comments");

                            }}
                        />
                    </View>
                </Card>




            )}
        </AuthContext.Consumer>
    )



}

export default PostComponent;