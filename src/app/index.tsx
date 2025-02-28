import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/button/index";
import Input from "../components/input";
import { useState } from "react";

function Index() {
  const [name, setName] = useState<string>();
  const [name1, setName1] = useState("Juan");
  

  function handleSubmit() {
    const name = "Juan";
    Alert.alert(`ola, ${name}`);
  }

  function onChangeText(text: string) {
    console.log(text);
    setName(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> hi there, {name} </Text>
      <Input label="nome" onChangeText={(text) => console.log(text)} />
      <Input label="Idade" />
      <Button label={"enviar"} onPress={handleSubmit} activeOpacity={1} />
      <Button label={"continuar"} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#121212",
  },
});

export default Index;
