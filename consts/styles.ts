import { StyleSheet } from "react-native";

const fontSizes = {
    size_1: 16,
    size_2:20,
    size_3:32
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    height: "100%",
  },
  headerBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    marginBottom: 12,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginTop: -20,
  },
  header: {
    fontSize: fontSizes.size_3,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: fontSizes.size_2,
    fontWeight: "900",
    color: "#444",
    marginBottom: 12,
  },
  cyanBox: {
    backgroundColor: "#00C7BE",
    borderRadius: 16,
    padding: 16,
  },
  progressText: {
    color: "#666",
    fontSize: fontSizes.size_1,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },

  progressBarBase: {
    width: "100%",
    height: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 3
  },
  progressBarFill: {
    // width:'100%',
    height: 10,
    borderRadius: 16,
    padding: 2,
  },

  //ESTILOS DE LA GRAFICA ==================================================================================
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  dayNumber: {
    fontSize: fontSizes.size_1,
    fontWeight: "500",
    color: "#2d3436",
  },
  dayButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  selectedDayButton: {
    backgroundColor: "#00C7BE",
  },
  selectedDayText: {
    color: "#ffffff",
  },
  numbersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 27,
    justifyContent: "space-between",
    marginVertical: 16,
    // marginHorizontal:"auto"
  },
  metricsContainer: {
    marginTop: 20,
  },
  scrollContainer: {
    paddingRight: 20, // Espacio al final del scroll
  },
  barsContainer: {
    flexDirection: "row",
    gap: 18, // Espacio entre columnas
    paddingHorizontal: 16, // Padding lateral inicial
  },
  barColumn: {
    alignItems: "center",
    width: 20,
  },
  barWrapper: {
    width: 10,
    height: 100,
    justifyContent: "flex-end",
    backgroundColor: "#D6DBED",
    borderRadius: 16,
  },
  bar: {
    width: 10,
    backgroundColor: "#00C7BE",
    borderRadius: 16,
  },
  gridNumber: {
    textAlign: "center",
    fontSize: fontSizes.size_1,
    color: "#636e72",
    marginTop: 8,
    width: "100%",
  },
  scoreTitle: {
    fontSize: fontSizes.size_1,
    color: "#2d3436",
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#2d3436',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  tooltipPointer: {
    position: 'absolute',
    bottom: -8,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2d3436',
  },


  //ESTILOS DE TARJETAS DE PUNTUACION =========================================================================
  scoreGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  scoreColumn: {
    width: "48%",
  },
  scoreItem: {
    marginBottom: 16,
    borderRadius: 16,
    borderBottomWidth: 10,
    padding: 8,
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  scoreLabel: {
    fontSize: fontSizes.size_1,
    color: "#000",
    fontWeight: "bold",
  },
  scoreValue: {
    fontSize: fontSizes.size_2,
    // color: '#000',
    fontWeight: "bold",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#EDF2F7",
    borderRadius: 2,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#00C7BE",
    borderRadius: 2,
  },

  //SECCION DE ULTIMO JUEGO JUGADO ===============================================================================
  gameContainer: {
    // flex: 1,
    // position: 'relative',
    height:400
  },
  imageContainer: {
    height: 150,
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    // overflow: 'hidden',
    marginBottom: 16,
    overflow:"hidden"
  },
  gameImage: {
    width: "100%",
    height: "100%",
    shadowColor: 'red',
    shadowRadius: 10
  },
  gameLabel:{
    color:'#fff',
    position:'absolute',
    bottom:10,
    right:10,
    fontSize:fontSizes.size_2,
    fontWeight: 'bold'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#00C7BE',
    borderWidth: 8,
    borderColor: 'white',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 5,
    shadowColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.size_3,
    fontWeight: 'bold',
  },

  //ESTILOS DE LA BARRA INFERIOR =========================================================================================
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    // elevation: 8,
  },
  bottomText: {
    fontSize: fontSizes.size_1,
    color: "#333",
  },
});
