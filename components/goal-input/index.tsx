import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
} from "react-native";

import styles from "./goal-input.style";

type GoalInputProps = {
  onAddCallback: (goal: string) => void;
};

const GoalInput = ({ onAddCallback }: GoalInputProps) => {
  const [currentGoal, setCurrentGoal] = useState("");

  const onGoalChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setCurrentGoal(event.nativeEvent.text);
  };

  const onAddGoal = () => {
    onAddCallback && onAddCallback(currentGoal);

    setCurrentGoal("");
  };
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input_field}
        placeholder="Enter your goals"
        value={currentGoal}
        onChange={onGoalChange}
      />
      <Pressable style={styles.input_submit} onPress={onAddGoal}>
        <Text>Add goal</Text>
      </Pressable>
    </View>
  );
};

export default GoalInput;
