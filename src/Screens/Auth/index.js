import React, { useState } from "react";
import { View, Image, Text } from "react-native";

// Components
import Layout from "../../Components/Layout";
import Picker from "../../Components/Picker";
import SumbitButton from "../../Components/SumbitButton";

// Constants
import { languageItems } from "./Constants/languages";

// Images
import { authBackground, logo } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

export default function Auth({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("English");
  const [items, setItems] = useState(languageItems);

  return (
    <Layout
      type={1}
      backgroundImage={authBackground}
      content={
        <View style={styles.container}>
          <View style={styles.languageContainer}>
            <Picker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              theme={"DARK"}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoIcon} />
          </View>
          <View style={styles.buttonContainer}>
            <SumbitButton
              onEvent={() => navigation.navigate("Register")}
              title={
                <Text style={styles.registerButtonText}>
                  Sign up and try it for free
                </Text>
              }
              buttonStyle={styles.registerButton}
            />
            <SumbitButton
              onEvent={() => navigation.navigate("Login")}
              title={
                <Text style={styles.registerButtonText}>
                  Already a memebr? log in
                </Text>
              }
              buttonStyle={styles.LoginButton}
            />
            <SumbitButton
              onEvent={() => navigation.navigate("MealPlan")}
              title={<Text style={styles.skipBottonText}>Skip for now</Text>}
              buttonStyle={styles.skipButton}
            />
          </View>
        </View>
      }
    />
  );
}
