import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import {
    Card,
    Button,
    Text,
    Avatar,
    Input,
    Header,
} from "react-native-elements";
import moment from 'moment';
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";
import CommentComponent from "../components/CommentComponent";
import { getDataJSON, storeDataJSON, addDataJSON, } from '../functions/AsyncStorageFunctions';

const CommentScreen = (props) => {

    let info = props.route.params;
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [postcomments, setPostComments] = useState([]);

    const loadComments = async () => {
        let allcomments = await getDataJSON('Comments');
        setComments(allcomments);
        setPostComments(allcomments.filter((el) => el.postid == info.postid));
    };
    const loadNotifications = async () => {
        let allnotifications = await getDataJSON('Notifications');
        setNotifications(allnotifications);
    };

    useEffect(() => {
        loadComments();
        loadNotifications();
    }, []);


    return (

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
                        {info.user.name}
                    </Text>
                </View>
                <Text style={{ fontStyle: "italic" }}> Posted on {info.time}</Text>
                <Text
                    style={{
                        paddingVertical: 10,
                    }}
                >
                    {info.body}
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
                    onChangeText={function (currentInput) {
                        setComment(currentInput)
                    }}

                />
                <Button title="Comment" type="outline" onPress={function () {

                }} />
            </Card>



            <FlatList
                //ListHeaderComponent={Loadpost(auth)}
                data={postcomments}
                renderItem={({ item }) => {
                    return (
                        <CommentComponent
                            name={item.user.name}
                            time={'Commented on ' + item.time}
                            comment={item.body}
                        />

                    )
                }}
            />


        </ScrollView>



        </View>


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