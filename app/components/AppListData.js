import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppListData({ iconTitle, name, email }) {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.circleImage}>
        <Text style={styles.titleStyle}>{iconTitle}</Text>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.item}>{name}</Text>
        <Text style={styles.item}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: { flexDirection: "row", alignItems: "center" },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#D42486",
    alignItems: "center",
    justifyContent: "center",
  },

  titleStyle: {
    fontSize: 40,
    textTransform: "uppercase",
    color: "white",
  },
});
