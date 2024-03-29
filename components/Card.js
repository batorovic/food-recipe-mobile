import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import { TEXTS } from "../constants";
import { FlatList } from "react-native-gesture-handler";
import { async } from "@firebase/util";
import {
  db,
  getCollectionByFieldInArray,
  onSnap,
} from "../utils/firebaseConfig";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Card = (props) => {
  const { field, docField, propTitle } = props;

  const navigation = useNavigation();
  const [snap, setSnap] = useState([]);

  useEffect(() => {
    console.log("card getdata use effect");
    getData();
  }, []);

  const getData = async () => {
    // await getCollectionByFieldInArray("post", docField, field).then((e) => {
    //   console.log("card view");
    //   setSnap(e);
    // });

    // const userRef = collection(db, "post");
    // const q = query(userRef, where(docField, "==", field));
    // unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   let data = [];
    //   querySnapshot.forEach((doc) => {
    //     data.push(doc.data());
    //   });
    //   setSnap(data);
    // });

    onSnap("post", docField, field, setSnap);
  };

  const Item = ({ image, title, addedBy, itemSnap, rating }) => {
    let ratingOfTheItem = 0;
    if (rating) {
      rating.map((e) => {
        ratingOfTheItem += e.number;
      });
      ratingOfTheItem /= itemSnap.rating.length;
    }
    return (
      <View style={{ padding: moderateScale(5) }}>
        <Pressable
          onPress={() => {
            console.log(itemSnap.documentId);
            navigation.push("RecipePage", {
              snap: itemSnap,
              rating: ratingOfTheItem,
            });
          }}
        >
          <View style={styles.categoryStyle}>
            <Image
              source={{ uri: image }}
              style={{
                alignSelf: "center",
                height: "100%",
                width: "100%",
                // resizeMode: "contain",
                borderRadius: 20,
              }}
            />
          </View>
          <View style={styles.ratingContainer}>
            <Octicons name="star-fill" size={20} color="#FCC806" />
            <Text style={{ fontWeight: "bold" }}>
              {new Intl.NumberFormat("en-IN", {
                maximumFractionDigits: 1,
              }).format(ratingOfTheItem)}
            </Text>
          </View>
        </Pressable>

        <View style={{ marginLeft: moderateScale(20) }}>
          <Text style={TEXTS.titleText3}>{title}</Text>
          {/* {addedBy ? <Text>{addedBy}</Text> : undefined} */}
          {/* <Text>avatar and name {addedBy}</Text> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardTitle}>
        <Text style={TEXTS.titleText2}>{propTitle}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push("SeeAll", {
              selectedSnap: snap,
              title: propTitle,
            });
          }}
        >
          <Text style={styles.cardTitle.rightText}>see all {">"}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        scrool
        horizontal={true}
        data={snap.slice(0, 4)} // 4 tane var see all ile hepsini goster !
        renderItem={({ item }) => {
          return (
            <Item
              image={item.coverImagePath}
              title={item.title}
              addedBy={item.addedBy}
              itemSnap={item}
              rating={item.rating}
            />
          );
        }}
        keyExtractor={(item) => item.documentId}
      />
      {/* {snap.length > 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrool
          horizontal={true}
          data={snap.slice(0, 4)} // 4 tane var see all ile hepsini goster !
          renderItem={({ item }) => {
            return (
              <Item
                image={item.coverImagePath}
                title={item.title}
                addedBy={item.addedBy}
                itemSnap={item}
                rating={item.rating}
              />
            );
          }}
          keyExtractor={(item) => item.documentId}
        />
      ) : null} */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    rightText: {
      marginRight: horizontalScale(10),
      color: "#5A6780",
    },
  },
  categoryStyle: {
    width: moderateScale(230),
    height: moderateScale(150),
    marginLeft: moderateScale(5),
  },
  categoryText: {
    color: "white",
    fontWeight: "bold",
  },

  ratingContainer: {
    position: "absolute",
    right: 0,
    padding: moderateScale(5),
    width: moderateScale(55),
    marginRight: horizontalScale(10),
    marginTop: horizontalScale(10),
    borderRadius: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
