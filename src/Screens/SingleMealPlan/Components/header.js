import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import SumbitButton from "../../../Components/SumbitButton";
import DModal from "../../../Components/Modal";
import Menu from "./menu";

//Const
import { menuData } from "../Constants/menu";

// Images
import { menu, basket, close } from "../../../Assets/Images/index";

//Styles
import styles from "./headerStyles";

export default function Header(props) {
  const navigation = useNavigation();

  const [menuVisiable, setMenuVisiable] = useState(false);

  const { title } = props;

  const hideMenu = () => {
    setMenuVisiable(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View style={styles.headerSideRow}>
          <SumbitButton
            onEvent={() => navigation.goBack()}
            title={
              <Image
                source={basket}
                style={styles.backIcon}
                resizeMode="contain"
              />
            }
            buttonStyle={styles.basketContainer}
          />
        </View>
        <View style={styles.headerMiddleRow}>
          <Text style={styles.title}>FREE MEAL PLAN</Text>
          <Text style={styles.subTitle}>{title}</Text>
        </View>
        <View style={[styles.headerSideRow, styles.rightCorner]}>
          <SumbitButton
            onEvent={() => setMenuVisiable(true)}
            title={
              <Image
                source={menu}
                style={styles.backIcon}
                resizeMode="contain"
              />
            }
            buttonStyle={styles.basketContainer}
          />
        </View>
      </View>
      <DModal
        modalVisible={menuVisiable}
        hideModal={hideMenu}
        content={
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              <View style={styles.closeContainer}>
                <TouchableOpacity
                  onPress={() => hideMenu()}
                  style={styles.closeIconContainer}
                >
                  <Image
                    source={close}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.modalTitleText}>KETOGENIC</Text>
                <Text style={styles.modalSubTitleText}>{title}</Text>
              </View>
            </View>
            <Menu data={menuData} />
          </View>
        }
      />
    </View>
  );
}
