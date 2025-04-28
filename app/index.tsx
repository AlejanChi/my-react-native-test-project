import GameListScreen from "@/components/GameListScreen";
import PlayBtn from "@/components/LetsPlayBtn";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { styles } from "@/consts/styles";
import { AntDesign, Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("stats");
  useEffect(() => {
    const newData = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newData);
  }, []);
  return (
    <View>
      <SafeAreaView style={[styles.container]}>
        {/* Header Fijo */}
        <View style={styles.headerBlock}>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 6 }}>
            <AntDesign name="star" size={32} color="#FDD835" />
            <Text style={styles.header}>12</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 6 }}>
            <FontAwesome6 name="brain" size={32} color="#FFB3B3" />
            <Text style={styles.header}>{randomNumber.toString()}%</Text>
          </View>
        </View>

        {activeTab == "stats" && <ProgressDashboard />}
        {activeTab == "games" && <GameListScreen />}

        <PlayBtn short={activeTab=="stats"}/>

        {/* BARRA BAJA */}
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => setActiveTab("games")}>
            <Ionicons
              name="game-controller"
              size={32}
              color={activeTab === "games" ? "#00C7BE" : "#757575"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("achievements")}>
            <Entypo
              name="trophy"
              size={32}
              color={activeTab === "achievements" ? "#FDD835" : "#757575"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("stats")}>
            <Ionicons
              name="bar-chart"
              size={32}
              color={activeTab === "stats" ? "#00C7BE" : "#757575"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("settings")}>
            <FontAwesome6
              name="gear"
              size={32}
              color={activeTab === "settings" ? "#00C7BE" : "#757575"}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
