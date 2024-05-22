import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./styles";
import subtitle from "../../helpers/getTime";
import { useState } from "react";
import Participant from "../../components/Participant";

type ParticiantType = string[];

export default function Home() {
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState<ParticiantType>([]);

  const handleAddParticipant = () => {
    if (participants.includes(name)) {
      Alert.alert(
        "Participante Existente",
        "Já existe um participante com esse nome"
      );
    } else {
      setParticipants([...participants, name]);
    }
  };
  return (
    <View style={styles.mainPage}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subColor}>{subtitle}</Text>

      <View style={styles.participantContainer}>
        <TextInput
          value={name}
          onChangeText={(value) => setName(value)}
          style={styles.inputName}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            handleAddParticipant(), setName("");
          }}
        >
          <Text style={styles.buttonPlus}>+</Text>
        </Pressable>
      </View>
      <Text style={styles.participantTitle}>Participantes</Text>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={styles.participantSubTitle}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Participant
            name={item}
            onPress={() =>
              Alert.alert("Remover", `Remover o ${participants[index]}?`, [
                {
                  text: "Não",
                  style: "cancel",
                },
                {
                  text: "Sim",
                  onPress: () =>
                    setParticipants(participants.filter((_, i) => i !== index)),
                },
              ])
            }
          />
        )}
      />
    </View>
  );
}
