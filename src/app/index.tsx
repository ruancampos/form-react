import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "@/components/button/index";
import Input from "@/components/input/index";
import { useState } from "react";
import { router } from "expo-router";

function Index() {
  const [name, setName] = useState("usuario");
  

  function handleSubmit() {
    const name = "Juan";
    alert(`ola, ${name}`);
  }

  function handleNext() {
    router.navigate("/onboarding")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> hi there, {name} </Text>
      <Input label="nome" onChangeText={setName} />
      <Input label="Idade" />
      <Button label={"saudação"} onPress={handleSubmit} activeOpacity={1} />
      <Button label={"continuar"} onPress={handleNext} />
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
