import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Components
import SumbitButton from "../SumbitButton";

//Const
import { back, search } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

/**
 * @typedef {object} Header
 * @property {string} title
 * @property {object} onSearch
 */

export default function Header(props) {
  const { title, onSearch } = props;

  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSideRow}>
        <SumbitButton
          onEvent={() => navigation.goBack()}
          title={
            <Image source={back} style={styles.backIcon} resizeMode="contain" />
          }
          buttonStyle={styles.backContainer}
        />
      </View>
      <View style={styles.headerMiddleRow}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={[styles.headerSideRow, styles.rightCorner]}>
        <SumbitButton
          onEvent={() => onSearch()}
          title={
            <Image
              source={search}
              style={styles.backIcon}
              resizeMode="contain"
            />
          }
          buttonStyle={styles.backContainer}
        />
      </View>
    </View>
  );
}
