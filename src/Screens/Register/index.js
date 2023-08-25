import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, Alert } from "react-native";

// Components
import Layout from "../../Components/Layout";
import SumbitButton from "../../Components/SumbitButton";
import InputText from "../../Components/InputText";

// Images
import { back, facebook, google, apple } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

export default function Register({ navigation }) {
  const [mail, onChangeMail] = useState("");

  const onSubmit = () => {
    if (validateEmail(mail)) {
      console.log("here goes two second page of resigteration");
    } else {
      Alert.alert("Sign up Failed", "Please enter a valid email", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Layout
      type={2}
      backgroundStyle={styles.container}
      content={
        <SafeAreaView style={styles.container}>
          <View style={styles.backBtnContainer}>
            <SumbitButton
              onEvent={() => navigation.goBack()}
              title={
                <Image
                  source={back}
                  style={styles.logoIcon}
                  resizeMode="contain"
                />
              }
              buttonStyle={styles.LoginButton}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign up to</Text>
            <Text style={styles.headerText}>start your free trial</Text>
          </View>
          <View>
            <InputText
              onChangeText={onChangeMail}
              text={mail}
              placeHolderText={"Email"}
            />
            <SumbitButton
              onEvent={() => onSubmit()}
              title={
                <Text style={styles.registerAccountBtnText}>Continue</Text>
              }
              buttonStyle={styles.registerAccountBtn}
            />
          </View>
          <View style={styles.speratorContainer}>
            <View style={styles.speratorLine} />
            <View style={styles.speratorTextContainer}>
              <Text style={styles.speratorText}>or</Text>
            </View>
            <View style={styles.speratorLine} />
          </View>
          <View>
            <SumbitButton
              onEvent={() => console.log("social register")}
              title={
                <View style={styles.socialMediaContentContainer}>
                  <Image
                    source={facebook}
                    style={styles.facebookIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.socialMediaText}>
                    Continue with Facebook
                  </Text>
                </View>
              }
              buttonStyle={styles.socialMediaContainer}
            />
            <SumbitButton
              onEvent={() => console.log("social register")}
              title={
                <View style={styles.socialMediaContentContainer}>
                  <Image
                    source={google}
                    style={styles.facebookIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.socialMediaText}>
                    Continue with Google
                  </Text>
                </View>
              }
              buttonStyle={styles.socialMediaContainer}
            />
            <SumbitButton
              onEvent={() => console.log("social register")}
              title={
                <View style={styles.socialMediaContentContainer}>
                  <Image
                    source={apple}
                    style={styles.facebookIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.socialMediaText}>
                    Continue with Apple
                  </Text>
                </View>
              }
              buttonStyle={styles.socialMediaContainer}
            />
          </View>
        </SafeAreaView>
      }
    />
  );
}
