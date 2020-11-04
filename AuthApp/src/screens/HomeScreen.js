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
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";
import moment from 'moment';
import PostComponent from "../components/PostComponent"
import { getDataJSON, storeDataJSON, addDataJSON, } from '../functions/AsyncStorageFunctions';


const HomeScreen = (props) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState('');

  const loadPosts = async () => {
    setLoading(true);

    let allpost = await getDataJSON('Posts');
    setPosts(allpost);
  };

  useEffect(() => {
    loadPosts();
  }, []);


  return (

    <AuthContext.Consumer>
      {(auth) => (


        <ScrollView style={styles.viewStyle}>
          <View>
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
                onChangeText={function (currentInput) {
                  setPost(currentInput);
                }}
              />
              <Button
                title="Post"
                type="outline"
                onPress={function () {
                  let newpost = {
                    user: auth.Currentuser,
                    time: moment().format('DD MMM, YYYY'),
                    postid:
                      auth.Currentuser.email +
                      moment().format('YYYY-MM-DD hh:mm:ss a'),
                    body: post,
                  };
                  if (posts == undefined) {
                    setPosts([newpost]);
                    storeDataJSON('Posts', [newpost]);
                  } else {
                    setPosts([...posts, newpost]);
                    addDataJSON('Posts', newpost);
                  }
                }}

              />

            </Card>
            </View>




          <FlatList
            data={posts}
            inverted={true}
            keyExtractor={(item) => item.postid}
            renderItem={({ item }) => {
              return (
                <PostComponent
                  author={item.user.name}
                  title={item.time}
                  body={item.body}
                  navigation={props.navigation}
                  post={item}
                />
              );
            }}
          />

        </ScrollView>

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
    backgroundColor: "#DCDDDF",
  },
}
);

export default HomeScreen;