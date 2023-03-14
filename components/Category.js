import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEXTS } from "../constants";

const Category = () => {
  const DATA = [
    {
      id: "1",
      title: "American",
      iconName: "hamburger",
    },
    {
      id: "2",
      title: "Chinese",
      iconName: "noodles",
    },
    {
      id: "3",
      title: "French",
      iconName: "baguette",
    },
    {
      id: "4",
      title: "Italian",
      iconName: "pizza",
    },
    {
      id: "5",
      title: "Mexican",
      iconName: "taco",
    },
    {
      id: "6",
      title: "Spanish",
      iconName: "food-variant",
    },
    {
      id: "7",
      title: "Thai",
      iconName: "silverware-fork-knife",
    },
  ];

  const Item = ({ title, iconName }) => (
    <View style={{ padding: moderateScale(5) }}>
      <Pressable onPress={() => console.log(title)}>
        <View style={styles.categoryStyle}>
          <MaterialCommunityIcons name={iconName} size={28} color="orange" />
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={TEXTS.titleText2}>Category</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        scrool
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} iconName={item.iconName} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  categoryStyle: {
    backgroundColor: "#172b4d",
    justifyContent: "center",
    alignItems: "center",
    width: moderateScale(85),
    height: moderateScale(85),
    borderRadius: moderateScale(45),
    gap: 2,
    marginLeft: moderateScale(5),
  },
  categoryText: {
    color: "white",
    fontWeight: "bold",
  },
});
