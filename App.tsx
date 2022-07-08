import { Text, View, Button, TextInput } from "react-native";

import styles from "./app.styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Enter your goals" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}
