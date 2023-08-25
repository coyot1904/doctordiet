import React from "react";
import { TouchableOpacity } from "react-native";

/**
 * @typedef {object} SumbitButton
 * @property {object} onEvent
 * @property {object} buttonStyle
 * @property {React.ReactNode} title
 */

export default function SumbitButton(props) {
  const { title, onEvent, buttonStyle } = props;

  return (
    <TouchableOpacity onPress={onEvent} style={buttonStyle}>
      {title}
    </TouchableOpacity>
  );
}
