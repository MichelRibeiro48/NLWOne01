import { Pressable, Text, View } from "react-native";
import styles from "./styles";

type PropsParticipant = {
  name: string;
  onPress: () => void;
};
export default function Participant({ name, onPress }: PropsParticipant) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <View style={styles.participant}>
        <Text style={{ color: "#FFF" }}>{name}</Text>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonMinus}>-</Text>
      </Pressable>
    </View>
  );
}
