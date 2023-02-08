// import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, StatusBar, Text, View, Platform } from "react-native";
import logo from "../assets/logo.png";
import BackgroundImage from "../assets/backgroudImage.png";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
        <Image source={logo} style={styles.imageStyle} />
        <Text style={styles.welcomeStyle}>Welcome</Text>
        <AppButton title={"Sign Up"} onPress={() => navigation.navigate("LoginScreen")} />
        <AppButton
          title={"Log In"}
          marginTop={50}
          backgroundColor={"#EC268F"}
          textColor="white"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  imageStyle: {
    width: 220,
    height: 220,
    marginBottom: 60,
  },

  welcomeStyle: {
    marginTop: 0,
    marginBottom: 40,
    color: "#EC268F",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "center",
  },

  signUpStyle: {
    backgroundColor: "white",
  },
});
