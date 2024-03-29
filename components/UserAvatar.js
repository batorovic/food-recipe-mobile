import { View } from "react-native";
import React from "react";
import { horizontalScale } from "../Metrics";
import { Image } from "react-native";

const UserAvatar = (props) => {
  const { image, width, height, position, marginLeft } = props;

  return (
    <View
      style={{
        height: height,
        marginLeft: marginLeft === 0 ? marginLeft : horizontalScale(10),
        alignSelf: position,
      }}
    >
      <Image
        resizeMode="stretch"
        // source={{ uri: image }}
        source={{ uri: image }}
        style={{
          flex: 1,
          width: width,
          borderRadius: 100,
        }}
      />
    </View>
  );
};

export default UserAvatar;
