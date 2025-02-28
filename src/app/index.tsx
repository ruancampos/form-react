import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/button/index";

function Index() {
  function handleSubmit() {
    const name = "Juan";
    Alert.alert(`ola, ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> hello, world</Text>
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
    gap: 12
  },
});

export default Index;
