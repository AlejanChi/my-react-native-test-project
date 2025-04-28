// components/GameListScreen.tsx
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import GameCard, { GameInfo } from "./gameList/GameCard";
import { styles } from "@/consts/styles";

const gamesData: GameInfo[] = [
    {
      id: "1",
      title: "Fast Connection",
      description: "Connect matching-colored dots before time runs out",
      difficulty: "easy",
      type: "Speed",
      image: "https://example.com/images/fast-connection.jpg"
    },
    {
      id: "2",
      title: "Pattern Recall",
      description: "Memorize and recreate a pattern within 5 seconds",
      difficulty: "mid",
      type: "Memory",
      image: "https://example.com/images/pattern-recall.jpg"
    },
    {
      id: "3",
      title: "Word Blitz",
      description: "Form valid words from random letters",
      difficulty: "hard",
      type: "Language",
      image: "https://example.com/images/word-blitz.jpg"
    },
    {
      id: "4",
      title: "Logic Labyrinth",
      description: "Solve math-based puzzles to escape the maze",
      difficulty: "expert",
      type: "Logic",
      image: "https://example.com/images/logic-labyrinth.jpg"
    },
  ];

const GameListScreen = () => {
  return (
    <View style={[styles.container,{padding:1}]}>
      <FlatList
        data={gamesData}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
};

export default GameListScreen;
