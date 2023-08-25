import React from "react";
import { TextInput, Image, TouchableOpacity } from "react-native";

// Images
import { hide, show } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

/**
 * @typedef {object} InputText
 * @property {boolean} onChangeText
 * @property {string} text
 * @property {string} placeHolderText
 * @property {boolean} isNumric
 * @property {boolean} hidePass
 * @property {object} showPassowrd
 */

export default function InputText(props) {
  const {
    onChangeText,
    text,
    placeHolderText,
    isNumric,
    hidePass,
    showPassowrd,
  } = props;

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeHolderText}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType={typeof isNumric !== "undefined" ? isNumric : false}
        secureTextEntry={hidePass ? true : false}
      />
      {hidePass === true ? (
        <TouchableOpacity onPress={() => showPassowrd(false)}>
          <Image source={show} style={styles.logoIcon} resizeMode="cover" />
        </TouchableOpacity>
      ) : null}
      {hidePass === false ? (
        <TouchableOpacity onPress={() => showPassowrd(true)}>
          <Image source={hide} style={styles.showIcon} resizeMode="cover" />
        </TouchableOpacity>
      ) : null}
    </>
  );
}
