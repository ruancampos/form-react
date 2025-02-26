import { Alert, Button, StyleSheet, Text, View } from "react-native";

function Index() {
  function handleSubmit() {
    const name = "Juan";
    Alert.alert(`ola, ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> hello, world</Text>
      <Button title="Enviar" onPress={handleSubmit} />
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
  },
});

export default Index;
