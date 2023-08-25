import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Layout from "../../Components/Layout";
import SumbitButton from "../../Components/SumbitButton";
import Header from "./Components/header";
import DModal from "../../Components/Modal";
import Items from "./Components/Items";

// Images
import { back, close, alert } from "../../Assets/Images/index";

//Styles
import styles from "./styles";

export default function SingleMealPlan(props) {
  const item = props.route.params.item;

  const [dayVisible, setDayVisible] = useState(false);

  const [daySelected, setDaySelected] = useState("");

  const navigation = useNavigation();

  const hideDayModal = () => {
    setDayVisible(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Items
        item={item}
        setDaySelected={setDaySelected}
        setDayVisible={setDayVisible}
      />
    );
  };

  return (
    <Layout
      type={2}
      backgroundStyle={styles.container}
      content={
        <>
          <ScrollView style={styles.container}>
            <ImageBackground
              source={{
                uri:
                  process.env.EXPO_PUBLIC_MEDIA_URL +
                  item.schedule[0].lunch.recipesDetails[0].images.hz,
              }}
              style={styles.headerContainer}
              resizeMode="cover"
            ></ImageBackground>
            <Header title={item.title} />
            <FlatList
              data={item.schedule}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <DModal
              modalVisible={dayVisible}
              hideModal={hideDayModal}
              content={
                <View style={styles.modalContainer}>
                  <View style={styles.modalHeaderContainer}>
                    <View style={styles.closeContainer}>
                      <TouchableOpacity
                        onPress={() => hideDayModal()}
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
                      <Text style={styles.modalSubTitleText}>
                        {daySelected}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItemContainer}>
                      <Text style={styles.menuText}>Nutrition</Text>
                      <View>
                        <Image
                          source={alert}
                          style={styles.backIcon}
                          resizeMode="contain"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            />
          </ScrollView>
          <SumbitButton
            onEvent={() => navigation.goBack()}
            title={
              <Image
                source={back}
                style={styles.backIcon}
                resizeMode="contain"
              />
            }
            buttonStyle={styles.backContainer}
          />
          <SumbitButton
            onEvent={() => navigation.goBack()}
            title={
              <Text style={styles.addToDailyRoutineText}>
                Add to Daily Routine
              </Text>
            }
            buttonStyle={styles.addToDailyContainer}
          />
        </>
      }
    />
  );
}
