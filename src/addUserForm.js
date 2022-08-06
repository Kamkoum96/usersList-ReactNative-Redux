import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import InputField from "./Components/InputField";
import { RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/actions/userActions";

export default function AddUserForm() {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const [checked, setChecked] = useState("first");
  const [user, setUser] = useState({
    id: 100,
    image: "none",
    age: 20,
  });
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginLeft: "2%", marginBottom: "10%", flexDirection: "row" }}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => nav.goBack()}
        />
        <Text style={styles.text}>Go back </Text>
      </TouchableOpacity>

      <Text style={styles.text}>FirstName </Text>
      <InputField
        onPress={(text) => {
          handleChange("firstname", text);
        }}
      />
      <Text style={styles.text}>LastName </Text>
      <InputField
        onPress={(text) => {
          handleChange("lastname", text);
        }}
      />
      <Text style={styles.text}>Image </Text>
      <View style={{ flexDirection: "row", marginLeft: "10%" }}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("first");
            handleChange("image", "none");
          }}
          color="#152736"
        />
        <Text style={styles.text}>none </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: "10%" }}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("second");
            handleChange("image", "image");
          }}
          color="#152736"
        />
        <Text style={styles.text}>Add image </Text>
      </View>

      <View
        style={{
          marginTop: "10%",
          width: "30%",
          alignSelf: "center",
        }}
      >
        <Button
          title="Save"
          onPress={() => {
            nav.navigate("Main");
            dispatch(addUser(user));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 50,
    //alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: "2%",
  },
});
