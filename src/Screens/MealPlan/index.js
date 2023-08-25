import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

// Components
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Items from "./Components/Items";

// Images
import { animate } from "../../Assets/Images/index";

//Query
import { FREE_MEAL_PLAN_QUERY } from "../../Services/Querys/membermealsplans.query";
import { MEAL_PLAN_FRAGMEMT } from "../../Services/Fragments/mealplan.fragment";

//Styles
import styles from "./styles";

export default function MealPlan({ navigation }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const query = gql`
    ${MEAL_PLAN_FRAGMEMT}
    ${FREE_MEAL_PLAN_QUERY}
  `;

  const result = useQuery(query);

  useEffect(() => {
    if (typeof result?.data?.freeMealplans !== "undefined") {
      setData(result?.data?.freeMealplans);
      console.log(result?.data?.freeMealplans);
      setTimeout(() => {
        // added just for  watching view becuase sever response comes so fast
        setLoading(false);
      }, 1000);
    }
  }, [result]);

  const onSearch = () => {};

  const renderItem = ({ item }) => {
    return <Items item={item} />;
  };

  return (
    <Layout
      type={2}
      backgroundStyle={styles.container}
      content={
        <View style={styles.container}>
          <Header title={"MEAL PLANS"} onSearch={onSearch} />
          {loading === true ? (
            <Loading />
          ) : (
            <View>
              <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
              <Image
                source={animate}
                style={styles.animateIcon}
                resizeMode="cover"
              />
            </View>
          )}
        </View>
      }
    />
  );
}
