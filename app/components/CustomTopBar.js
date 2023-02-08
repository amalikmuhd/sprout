import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTopBar({ onPress, icon }) {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.firstRowStyle}>{icon}</View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.welcomeStyle}>Your Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: { flexDirection: "row", alignItems: "flex-start", marginBottom: 30, marginTop: 20 },
  firstRowStyle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D42486",
  },
  welcomeStyle: {
    marginTop: 0,
    marginBottom: 40,
    color: "#EC268F",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
});
