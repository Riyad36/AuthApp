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
    const [postcomments, setPostComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadComments = async () => {
        setLoading(true);
        let allcomments = await getDataJSON('Comments');
        setComments(allcomments);
        if (allcomments != null) {
            setPostComments(allcomments.filter((el) => el.postid == info.postid));
        } else {
            setPostComments([]);
        }
    };

    useEffect(() => {
        loadComments();
    }, []);


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


                    <Card>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                containerStyle={{ backgroundColor: "#1983ED" }}
                                rounded
                                icon={{ name: "user", type: "font-awesome", color: "black" }}
                                activeOpacity={1}
                            />
                            <Text h4Style={{ padding: 10 }} h4>
                                {info.user.name}
                            </Text>
                        </View>
                        <Text style={{ fontStyle: "italic", fontSize: 10 }}>{info.time}</Text>
                        <Text
                            style={{
                                paddingVertical: 10,
                                fontSize: 16,
                            }}
                        >
                            {info.body}
                        </Text>
                        <Card.Divider />
                        <View
                            style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
                        >



                        </View>

                        <Input
                            placeholder="Write a Comment"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                            onChangeText={function (currentInput) {
                                setComment(currentInput)
                            }}

                        />
                        <Button title="Comment" type="outline" onPress={function () {



                            let newcomment = {

                                postid: info.postid,
                                commentid: auth.Currentuser.email +
                                    moment().format('YYYY-MM-DD hh:mm:ss a'),
                                user: auth.Currentuser,
                                time: moment().format('DD MMM, YYYY'),
                                body: comment,
                            };

                            if (postcomments == undefined) {
                                setPostComments([newcomment]);
                            } else {
                                setPostComments([...postcomments, newcomment]);
                            }

                            if (comments == undefined) {
                                setComments([newcomment]);
                                storeDataJSON('Comments', [newcomment]);
                            } else {
                                setComments([...comments, newcomment]);
                                addDataJSON('Comments', newcomment);
                            }
                        }} />
                    </Card>



                    <FlatList
                        data={postcomments}
                        keyExtractor={(item) => item.commentid}

                        scrollsToTop={true}
                        renderItem={({ item }) => {
                            return (
                                <CommentComponent
                                    name={item.user.name}
                                    time={item.time}
                                    comment={item.body}
                                />

                            )
                        }}
                    />





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
        backgroundColor: "#DCDDDF",
    },
}
);

export default CommentScreen;