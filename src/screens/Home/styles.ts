import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainPage: {
        padding: 48,
        flex: 1,
        backgroundColor: 'black'
    },
    title: {
      color: "#FFF",
      marginTop: 20,
      fontSize: 24,
      fontWeight: "bold",
    },
    inputName: {
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 4,
        flex: 1,
        color: '#FFF',
        padding: 16,
      },
    button: {
        height: 56,
        width: 56,
        backgroundColor: "#31CF67",
        padding: 16,
        marginLeft: 8,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
      },
    participantTitle: {
      color: "#FFF",
      marginTop: 44,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10
    },
    participantContainer: { flexDirection: "row", marginTop: 34 }, 
    participantSubTitle: { textAlign: "center", color: "#FFF", marginTop: 28 },
    subColor: { color: "#6B6B6B" },
    buttonPlus: { fontSize: 20, color: "white" }
})