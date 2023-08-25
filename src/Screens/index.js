import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Auth from "./Auth";
import Register from "./Register";
import Login from "./Login";
import MealPlan from "./MealPlan";
import SingleMealPlan from "./SingleMealPlan";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleMealPlan"
        component={SingleMealPlan}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
