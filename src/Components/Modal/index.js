import React from "react";
import { View, Modal } from "react-native";

//Styles
import styles from "./styles";

/**
 * @typedef {object} Modal
 * @property {boolean} modalVisible
 * @property {object} hideModal
 * @property {React.ReactNode} content - content of page
 */

export default function DModal(props) {
  const { modalVisible, hideModal, content } = props;

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalVisible}
      onRequestClose={hideModal}
    >
      {content}
    </Modal>
  );
}
