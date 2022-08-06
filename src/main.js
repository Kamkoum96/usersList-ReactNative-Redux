import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Card from "./Components/card";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/actions/userActions";

export default function Main() {
  const users = useSelector((state) => state.allUsers.user.users);
  const nav = useNavigation();
  const dispatch = useDispatch();
  //**************API to GET All Users************/
  //const [Users, setUsers] = React.useState([]);

  const URL_GET_AVAILABLE = `https://dummyjson.com/users`;
  const OPtIONS_GET_AVAILABLE = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  const GET_USERS = () => {
    fetch(URL_GET_AVAILABLE, OPtIONS_GET_AVAILABLE)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getUsers(res));
      })
      .catch((err) => console.error(err));
  };
  //***************************************************/
  React.useEffect(() => {
    GET_USERS();
  }, []);
  //console.log(Users.users);w
  console.log(users);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Card
              name={item.firstName}
              age={item.age}
              url={item.image}
              onPress={() => nav.navigate("Details", { item: item })}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={(item) => item.id}
        />
        <View style={styles.btn}>
          <Button title="Add User" onPress={() => nav.navigate("Add")} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    marginTop: 20,
  },
  btn: {
    alignItems: "center",
  },
});
