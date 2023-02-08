import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import logo from "../assets/logo.png";
import AppButton from "../components/AppButton";
import Input from "react-native-input-style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginDetailsAction } from "../store/actions/authActions";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (name.trim() !== "" && email.trim() !== "") {
      dispatch(getLoginDetailsAction({ name: name, email: email }));
      navigation.navigate("ProfileScreen");
    } else {
      setName("Fields are required to be filled");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.imageStyle} />
        <Text style={styles.welcomeStyle}>Set up Profile</Text>

        <View style={styles.ViewStyled}>
          <Input
            onlyEnglish
            id="name"
            label="Name"
            required
            errorText="Name is required"
            onInputChange={(_, s) => {
              setName(s);
            }}
            outlined
            inputStyle={styles.inputStyle}
            labelStyle={{ backgroundColor: "#f2f2f2" }}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>

        <View style={styles.ViewStyled}>
          <Input
            id="email"
            label="Email"
            keyboardType="default"
            required
            email={true}
            autoCapitalize="none"
            errorText="Email is required"
            onInputChange={(_, s) => {
              setEmail(s);
            }}
            initialValue=""
            outlined
            inputStyle={styles.inputStyle}
            labelStyle={{ backgroundColor: "#f2f2f2" }}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>

        <AppButton
          leadingIcon={true}
          title={"Log In"}
          marginTop={30}
          textColor="white"
          backgroundColor="#D42486"
          onPress={() => handleLogin()}
          textTransform={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 90,
  },

  welcomeStyle: {
    marginTop: 30,
    marginBottom: 30,
    color: "#D42486",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputStyle: {
    borderColor: "#D42486",
    height: 55,
    width: "100%",
  },

  imageStyle: {
    width: 200,
    height: 200,
  },
  ViewStyled: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
});
