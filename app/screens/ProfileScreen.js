import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import CustomTopBar from "../components/CustomTopBar";
import AppListData from "../components/AppListData";

export default function ProfileScreen({ navigation }) {
  const userData = useSelector((state) => state.AuthReducers.getLoginDetailsData);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomTopBar
          icon={
            <Ionicons
              name="chevron-back"
              size={24}
              style={styles.iconStyle}
              onPress={() => navigation.navigate("LoginScreen")}
            />
          }
        />
        <FlatList
          data={[{ name: userData.name, email: userData.email }]}
          renderItem={({ item }) => (
            <AppListData iconTitle={userData.name.slice(0, 1)} name={item.name} email={item.email} />
          )}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  iconStyle: { marginRight: 10, fontSize: 40, textTransform: "uppercase", color: "white" },
});
