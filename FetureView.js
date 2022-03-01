import React from "react";
import { View, Text } from "react-native";

function FeatureView({ name, value }) {
  let stars = "";
  for (let i = 0; i < value; i += 1) {
    stars += "☆";
  }
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontFamily: "Futura", color: "#000" }}>{name}</Text>
      <Text style={{ fontFamily: "Futura", color: "#000" }}>{stars}</Text>
    </View>
  );
}

export default FeatureView;
