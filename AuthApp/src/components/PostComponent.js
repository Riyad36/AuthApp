import React, { useState, useEffect } from "react";
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
import { getDataJSON, storeDataJSON, addDataJSON, } from '../functions/AsyncStorageFunctions';
import { useIsFocused } from '@react-navigation/native';

const PostComponent = (props) => {


    const [postcomments, setPostComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [islike, setIsLike] = useState(false);
    const isVisible = useIsFocused();
    const [iconname, setIconname] = useState('like2');



    const loadComments = async () => {
        let allcomments = await getDataJSON('Comments');
        if (allcomments != null) {
            setPostComments(
                allcomments.filter((el) => el.postid == props.post.postid),
            );
        } else {
            setPostComments([]);
        }
    };


    const loadLikes = async () => {
        let alllikes = await getDataJSON('Likes-' + props.post.postid);
        if (alllikes != null) {
            setLikes(alllikes);
            if (alllikes.some((item) => item.person == props.user.email)) {
                setIsLike(true);
                setIconname('like1');
            }
        }
    };



    useEffect(() => {
        loadComments();
        loadLikes();
    }, [isVisible]);

 

    return (

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
                <Text h4Style={{ padding: 10 }} h4>{props.author}</Text>
            </View>
            <Text style={{ fontStyle: "italic", fontSize: 10 }}> {props.title}</Text>
            <Text
                style={{
                    paddingVertical: 10,
                }}
            >
                {props.body}
            </Text>
            <Card.Divider />
            <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
                <Button
                    type="outline"
                    title={'  Like (' + likes.length + ')'}
                    icon={<AntDesign name="like2" size={24} color="dodgerblue" />}


                    onPress={async function () {
                        if (islike) {
                            setIsLike(false);
                            setIconname('like2');
                            let newlikes = [];
                            for (let obj of likes) {
                                if (obj.person == props.user.email) {
                                } else {
                                    newlikes.push(obj);
                                }
                            }
                            if (newlikes.length > 0) {
                                setLikes(newlikes);
                                storeDataJSON('Likes-' + props.post.postid, newlikes);
                            } else {
                                setLikes([]);
                                removeData('Likes-' + props.post.postid);
                            }
                        }

                        else {
                            setIsLike(true);
                            setIconname('like1');
                            let likeobject = {
                                person: props.user.email,
                            };
                            if (likes.length == 0) {
                                setLikes([likeobject]);
                                storeDataJSON('Likes-' + props.post.postid, [likeobject]);
                            } else {
                                setLikes([...likes, likeobject]);
                                addDataJSON('Likes-' + props.post.postid, likeobject);
                            }
                        }
                    }}

                />


                <Button
                    type="solid"
                    title={'  Comment  (' + postcomments.length + ')  '}
                    onPress={function () {
                        //auth.setisLoggedIn(true);
                        props.navigation.navigate('Comments', props.post);

                    }}
                />

            </View>
        </Card>

    )

}


export default PostComponent;