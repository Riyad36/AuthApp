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

const CommentScreen = (props) => {

    const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
                    {/* <Card>
                        <Input
                            placeholder="What's On Your Mind?"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                        />
                        <Button title="Post" type="outline" onPress={function () { }} />
                    </Card> */}
                    <ScrollView>
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
                            <Text h4Style={{ padding: 10 }} h4>
                                Jim Halpert
                  </Text>
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
                            style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
                        >
                            <Button
                                type="solid"
                                title="  Like (21)"
                                icon={<AntDesign name="like2" size={24} color="#ffffff" />}
                            />
                            
                            
                        </View>
                    </Card>

                    <Card>
                        <Input
                            placeholder="Write Something"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                        />
                        <Button title="Comment" type="outline" onPress={function () { }} />
                    </Card>



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

                    </ScrollView>





                </View>
            )}
        </AuthContext.Consumer>
    )

}

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

export default CommentScreen;