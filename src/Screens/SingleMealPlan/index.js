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

// Images
import { down, back, menu, close, alert } from "../../Assets/Images/index";

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

  const Item = ({ item }) => {
    let str = String(item.name);

    return (
      <View key={item.name}>
        <View style={styles.itemHeaderContainer}>
          <Text style={styles.title}>
            {str[0].toUpperCase() + str.substr(1, 100)}
          </Text>
          <SumbitButton
            onEvent={() => {
              setDaySelected(str[0].toUpperCase() + str.substr(1, 100));
              setDayVisible(true);
            }}
            title={
              <Image
                source={down}
                style={styles.downIcon}
                resizeMode="contain"
              />
            }
          />
        </View>
        <View style={styles.dailyInfoContainer}>
          <Text style={styles.dailyText}>LUNCH</Text>
          <View style={styles.dailyPlanContainer}>
            <View style={styles.leftRow}>
              <Image
                source={{
                  uri:
                    process.env.EXPO_PUBLIC_MEDIA_URL +
                    item.lunch.recipesDetails[0].images.hz,
                }}
                style={styles.dailyIcon}
                resizeMode="cover"
              />
            </View>
            <View style={styles.middleRow}>
              <Text style={styles.dailyMainTitle}>
                {item.lunch.recipesDetails[0].title}
              </Text>
              <Text style={styles.subTitleDailyText}>5 min | 1 Servings</Text>
            </View>
            <View style={styles.rightRow}>
              <SumbitButton
                onEvent={() => console.log("go to menu")}
                title={
                  <Image
                    source={menu}
                    style={styles.menuIcon}
                    resizeMode="contain"
                  />
                }
                buttonStyle={styles.basketContainer}
              />
            </View>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.dailyInfoContainer}>
          <Text style={styles.dailyText}>DINNER</Text>
          <View style={styles.dailyPlanContainer}>
            <View style={styles.leftRow}>
              <Image
                source={{
                  uri:
                    process.env.EXPO_PUBLIC_MEDIA_URL +
                    item.dinner.recipesDetails[0].images.hz,
                }}
                style={styles.dailyIcon}
                resizeMode="cover"
              />
            </View>
            <View style={styles.middleRow}>
              <Text style={styles.dailyMainTitle}>
                {item.dinner.recipesDetails[0].title}
              </Text>
              <Text style={styles.subTitleDailyText}>5 min | 1 Servings</Text>
            </View>
            <View style={styles.rightRow}>
              <SumbitButton
                onEvent={() => console.log("go to menu")}
                title={
                  <Image
                    source={menu}
                    style={styles.menuIcon}
                    resizeMode="contain"
                  />
                }
                buttonStyle={styles.basketContainer}
              />
            </View>
          </View>
        </View>
      </View>
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
              renderItem={Item}
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
