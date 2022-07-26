import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Details(props) {
  const { item } = props.route.params;
  console.log(item);
  var img = { uri: item.image };
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        height={30}
        width={30}
        style={{ height: "40%", width: "60%", marginBottom: 20 }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> FirstName: </Text>
        <Text style={styles.text}> {item.firstName} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> LastName: </Text>
        <Text style={styles.text}> {item.lastName} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> Age: </Text>
        <Text style={styles.text}> {item.age} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> Adsress: </Text>
        <Text style={styles.text}> {item.company.address.address} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> Postal Code: </Text>
        <Text style={styles.text}> {item.company.address.postalCode} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}> State: </Text>
        <Text style={styles.text}> {item.company.address.state} </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button title="Go Back" onPress={() => nav.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 50,
    // alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});
