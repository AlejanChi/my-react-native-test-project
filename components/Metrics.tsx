import { styles } from "@/consts/styles";
import { FlatList, View, Text } from "react-native";

const Metrics = () => {
  // Datos de ejemplo para las barras (valores entre 0 y 100)
  const barData = [40, 65, 80, 30, 55, 90, 45, 70, 60, 35];

  return (
    <View style={styles.metricsContainer}>
      <View style={[styles.barsContainer]}>
        {barData.map((value, index) => (
            <View style={{flexDirection:"column",alignItems:"center",gap:10}}>
          <View key={index} style={styles.barWrapper}>
            <View style={[styles.bar, { height: `${value}%` }]} />
          </View>
          <Text key={index + 1} style={styles.gridNumber}>
          {index + 1}
        </Text>
            </View>
        ))}
      </View>
      
      <Text style={styles.scoreTitle}>
        cognitive score{" "}
        <View
          style={[
            { backgroundColor: "#00C7BE" },
            { width: 12 },
            { height: 12 },
          ]}
        ></View>
      </Text>
    </View>
  );
};

export default Metrics;
