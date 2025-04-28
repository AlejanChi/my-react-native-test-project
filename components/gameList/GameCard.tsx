// components/GameCard.tsx
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type GameInfo = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  type: string;
  image: string;
};
const GameCard = ({ game }: { game: GameInfo }) => {
  const getDifficultyColor = () => {
    switch (game.difficulty) {
      case "easy":
        return "#00C7BE";
      case "mid":
        return "#FDCB6E";
      case "hard":
        return "#FF7675";
      case "expert":
        return "#6C5CE7";
      default:
        return "#666";
    }
  };

  return (
    <TouchableOpacity style={styles.cardContainer}>
      {/* Contenedor de la imagen */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: game.image }}
          style={styles.gameImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons
              name="speedometer-outline"
              size={16}
              color={getDifficultyColor()}
            />
            <Text style={[styles.metaText, { color: getDifficultyColor() }]}>
              {game.difficulty}
            </Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="game-controller-outline" size={16} color="#666" />
            <Text style={styles.metaText}>{game.type}</Text>
          </View>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={24} color="#00C7BE" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderColor: '#00C7BE',
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    elevation: 2,
    shadowColor: "transparent",
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3436",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#636E72",
    marginBottom: 8,
    lineHeight: 20,
  },
  metaContainer: {
    flexDirection: "row",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "500",
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: "600",
  },
  // Imagen de la carta

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
  },
  gameImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D9D9"
  },
});

export default GameCard;
