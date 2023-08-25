import React from "react";
import { View, Image, Text } from "react-native";

// Components
import SumbitButton from "../../../Components/SumbitButton";

// Images
import { down, menu } from "../../../Assets/Images/index";

//Styles
import styles from "../styles";

export default function Items(props) {
  const { item, setDaySelected, setDayVisible } = props;

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
            <Image source={down} style={styles.downIcon} resizeMode="contain" />
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
}
