import { styles } from "@/consts/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableHighlight, View, Text, Animated } from "react-native";

function PlayBtn() {
  const [isPressed, setIsPressed] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    setIsPressed(true);
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setIsPressed(false);
  };

  return (
    <TouchableHighlight
      underlayColor={"#00C7BE"}
      style={[styles.floatingButton]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        transform: [{ scale: scaleValue }]
      }}>
        <Ionicons 
          name="play-outline" 
          size={40} 
          color={isPressed ? "#FFFFFF" : "#F0F0F0"} 
        />
        <Text style={[
          styles.buttonText,
          { color: isPressed ? "#FFFFFF" : "#F8F8F8" }
        ]}>
          Let's play
        </Text>
      </Animated.View>
    </TouchableHighlight>
  );
}

export default PlayBtn;