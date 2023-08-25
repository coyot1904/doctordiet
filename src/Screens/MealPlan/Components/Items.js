import React from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//Styles
import styles from "../styles";

export default function Items(props) {
  const { item } = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("SingleMealPlan", { item: item })}
    >
      <ImageBackground
        style={styles.itemHeaderContainer}
        resizeMode="cover"
        source={{
          uri:
            process.env.EXPO_PUBLIC_MEDIA_URL +
            item.schedule[0].lunch.recipesDetails[0]?.images.hz,
        }}
      >
        <View style={styles.itemHeaderBackContainer}>
          <Text style={styles.itemTitle}>FREE MEAL PLAN</Text>
          <Text style={styles.itemSubTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.itemFooterContainer}>
        <Image
          source={{
            uri:
              process.env.EXPO_PUBLIC_MEDIA_URL +
              item.schedule[0].lunch.recipesDetails[0]?.images.vt,
          }}
          style={[styles.detialsIcon, styles.rightMargin]}
          resizeMode="cover"
        />
        <Image
          source={{
            uri:
              process.env.EXPO_PUBLIC_MEDIA_URL +
              item.schedule[0].dinner.recipesDetails[0]?.images.vt,
          }}
          style={[styles.detialsIcon, styles.rightMargin]}
          resizeMode="cover"
        />
        <Image
          source={{
            uri:
              process.env.EXPO_PUBLIC_MEDIA_URL +
              item.schedule[0].lunch.recipesDetails[0]?.images.vt,
          }}
          style={styles.detialsIcon}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
}
