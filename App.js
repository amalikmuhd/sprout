import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import { Provider } from "react-redux";
import { Store } from "./app/store";

function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
        headerMode: "screen",
      }}
    >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
      <Provider store={Store}>
        <MyStack />
      </Provider>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}
