import { Alert, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../utils/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { horizontalScale, moderateScale } from "../Metrics";
import SearchBar from "../components/Inputs/SearchBar";
import Avatar from "../components/Avatar";
import Category from "../components/Category";
import Card from "../components/Card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HudView from "../components/HudView";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  // const [search, setSearch] = useState("");
  const [snap, setSnap] = useState({});
  const [veggies, setVeggies] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handleSignOut = () => {
    // auth.signOut().then(() => navigation.navigate(Login));
    auth
      .signOut()
      .then(async () => {
        Alert.alert("succes");
      })
      .catch((err) => console.log(err));
  };

  const categoryCard = [
    // {
    //   id: 1,
    //   field: "veggie",
    //   docField: "category",
    //   propTitle: "Veggies",
    // },
    // {
    //   id: 2,
    //   field: "popular",
    //   docField: "category",
    //   propTitle: "Popular",
    // },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {loading ? <HudView /> : null}

      <KeyboardAwareScrollView>
        <View style={styles.body}>
          <View style={styles.top}>
            {/* <SearchBar setVal={setSearch} /> */}
            <SearchBar setLoading={setLoading} />

            <Avatar />
          </View>
          <Category setLoading={setLoading} />

          {categoryCard.map((value) => (
            <Card {...value} key={value.id} />
          ))}

          {/* // <Card field="veggie" docField="category" propTitle="Veggies" />
          // <Card field="popular" docField="category" propTitle="Popular" /> */}
        </View>

        {/* <View style={styles.middleSectionContainer}>
          <RoundedButton text="Signout" buttonOnPress={handleSignOut} />
        </View> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: moderateScale(10),
    marginRight: moderateScale(15),
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
  },
  body: {
    flex: 1,
  },
});
