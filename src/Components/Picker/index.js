import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

//Styles
import styles from "./styles";

/**
 * @typedef {object} Picker
 * @property {boolean} open
 * @property {Array} value
 * @property {Array} items
 * @property {object} setOpen
 * @property {object} setValue
 * @property {object} setItems
 */

export default function Picker(props) {
  const { open, value, items, setOpen, setValue, setItems, theme } = props;

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme={theme}
      style={styles.dropDownStyle}
    />
  );
}
