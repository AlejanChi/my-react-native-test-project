import { styles } from "@/consts/styles";
import { View, Text } from "react-native";
import Metrics from "./Metrics";

const FocusSection = () => (
  <View style={[styles.section, { marginTop: 20 }]}>
    <Text style={styles.sectionTitle}>Your focus for last:</Text>

    <View style={styles.daysRow}>
      <Text style={styles.dayNumber}>10 days</Text>
      <Text style={styles.dayNumber}>20 days</Text>
      <Text style={styles.dayNumber}>30 days</Text>
    </View>

    <Metrics />

    <View style={styles.separator} />
  </View>
);

export default FocusSection;
