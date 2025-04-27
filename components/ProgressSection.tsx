import { styles } from "@/consts/styles";
import { View, Text, ViewStyle } from "react-native";

const ProgressSection = ({value}:{value:string}) => (
  <View style={styles.cyanBox}>
    <Text style={[styles.sectionTitle, {color:"#fff"}]}>Today progress:</Text>
    <Text style={[styles.progressText, {color:"#fff", fontWeight:"bold"},{alignSelf:'flex-end'}]}>No job minutes completes.</Text>
    <View style={[styles.progressBarBase,{marginTop:12}]}>
    <View style={[styles.progressBarFill,{ width: value } as ViewStyle]} />
    </View>
  </View>
);

export default ProgressSection