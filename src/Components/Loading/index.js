import React from "react";
import { View, Image } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

// Images
import { animate } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

/**
 * @typedef {object} Loading
 */

export default function Loading() {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <>
      <View style={styles.loadingContainer}>
        <View>
          <ShimmerPlaceholder
            style={styles.boxLoading}
            LinearGradient={LinearGradient}
          />
          <View style={styles.loadingContainerRow}>
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
            <View style={styles.middleRow} />
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
            <View style={styles.middleRow} />
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
          </View>
        </View>
        <View style={styles.secondLoader}>
          <ShimmerPlaceholder
            style={styles.boxLoading}
            LinearGradient={LinearGradient}
          />
          <View style={styles.loadingContainerRow}>
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
            <View style={styles.middleRow} />
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
            <View style={styles.middleRow} />
            <ShimmerPlaceholder
              style={styles.smallBox}
              LinearGradient={LinearGradient}
            />
          </View>
        </View>
      </View>
      <Image source={animate} style={styles.animateIcon} resizeMode="cover" />
    </>
  );
}
