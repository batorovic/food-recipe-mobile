import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../Metrics";
import { TEXTS } from "../../constants";
import { Image, Text, View } from "react-native";

const ReplyComment = ({ username, comment, time, photoUrl }) => {
  let date;
  try {
    const dateK = time.toDate();
    const formatter = new Intl.DateTimeFormat("tr", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    date = formatter.format(dateK);
  } catch (error) {}
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 45,
          alignSelf: "flex-start",
        }}
      >
        <Image
          resizeMode="stretch"
          // source={{ uri: image }}
          source={{ uri: photoUrl }}
          style={{
            flex: 1,
            width: 45,
            borderRadius: 30,
          }}
        />
      </View>

      <View>
        <View>
          <Text style={TEXTS.titleText3}>{username.slice(0, 14)}</Text>
          <Text style={{ fontSize: moderateScale(12.5), color: "grey" }}>
            {date}
          </Text>
        </View>

        <Text
          style={[
            TEXTS.infoText,
            { marginTop: verticalScale(10), color: "black" },
          ]}
        >
          {comment}
        </Text>
      </View>
    </View>
  );
};

export default ReplyComment;

const styles = StyleSheet.create({
  container: {
    width: moderateScale(220),
    marginTop: verticalScale(10),
    flexDirection: "row",
    gap: moderateScale(15),
    padding: moderateScale(5),
  },
});
