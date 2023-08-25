import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

//Styles
import styles from "./menuStyles";

export default function Menu(props) {
  const { data } = props;

  const Item = ({ item }) => {
    return (
      <TouchableOpacity key={item} style={styles.menuItemContainer}>
        <Text style={styles.menuText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.menuContainer}>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
