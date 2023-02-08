import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppListData({ iconTitle, name, email }) {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.circleImage}>
        <Text style={styles.CirleTitleStyle}>{iconTitle}</Text>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.descriptionStyle}>{email}</Text>
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

  CirleTitleStyle: {
    fontSize: 40,
    textTransform: "uppercase",
    color: "white",
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  descriptionStyle: {
    fontSize: 14,
    fontWeight: "300",
  },
});
