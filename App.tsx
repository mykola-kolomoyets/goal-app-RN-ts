import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

import Goal, { GoalItem } from "./components/goal";

import styles from "./app.styles";

export default function App() {
  const [goals, setGoals] = useState<GoalItem[]>([]);
  const [currentGoal, setCurrentGoal] = useState("");

  const onGoalChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setCurrentGoal(event.nativeEvent.text);
  };

  const onGoalAdd = () => {
    setGoals((prev) => [
      ...prev,
      { id: Math.random().toString(), text: currentGoal },
    ]);

    setCurrentGoal("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input_field}
          placeholder="Enter your goals"
          onChange={onGoalChange}
        />
        <Pressable style={styles.input_submit} onPress={onGoalAdd}>
          <Text>Add goal</Text>
        </Pressable>
      </View>
      <View style={styles.goals_container}>
        {goals.map((goal) => (
          <Goal key={goal.id} {...goal} />
        ))}
      </View>
    </View>
  );
}
