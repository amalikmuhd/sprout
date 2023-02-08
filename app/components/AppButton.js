import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
export default function AppButton({
  title,
  onPress,
  backgroundColor,
  textColor,
  marginTop,
  leadingIcon,
  textTransform,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: backgroundColor ? backgroundColor : "white",
        marginTop: marginTop ? marginTop : "",
      }}
    >
      {leadingIcon && <Icon name="lock" size={20} color="white" style={{ marginRight: 10 }} />}
      <Text
        style={{
          ...styles.text,
          color: textColor ? textColor : "#D42486",
          textTransform: !textTransform ? "none" : "uppercase",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 55,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
