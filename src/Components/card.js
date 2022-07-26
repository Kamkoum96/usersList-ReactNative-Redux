import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import image from "../../assets/index.png";

export default function Card({ name, age, url, onPress }) {
  var img = { uri: url };
  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        source={!url ? image : img}
        resizeMode="cover"
        style={styles.img}
      >
        <View style={styles.info}>
          <Text style={styles.txt}> {name} </Text>
          <Text style={styles.txt}> {age} </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "15%",
    width: "30%",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    flex: 1,
    height: 200,
    //alignItems: "baseline",
    // justifyContent: "flex-end",
    borderWidth: 0.5,
    margin: 20,
  },
  txt: {
    fontSize: 20,
  },
});
