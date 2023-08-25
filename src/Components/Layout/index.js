import React from "react";
import { View, ImageBackground } from "react-native";

//Styles
import styles from "./styles";

/**
 * @typedef {object} Layout
 * @property {string} backgroundImage - srouce of background image
 * @property {number} type - background image is : 1 and gradiant background : 2
 * @property {React.ReactNode} content - content of page
 * @property {object} backgroundStyle - style of layout
 */

export default function Layout(props) {
  const { backgroundImage, type, content, backgroundStyle } = props;
  if (type === 1) {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        resizeMode="cover"
      >
        {content}
      </ImageBackground>
    );
  } else {
    return <View style={backgroundStyle}>{content}</View>;
  }
}
