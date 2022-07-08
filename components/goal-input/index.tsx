import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Modal,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./goal-input.style";

type GoalInputProps = {
  isVisible: boolean;
  onAddCallback: (goal: string) => void;
  onCancelCallback: () => void;
};

const GoalInput = ({
  onAddCallback,
  onCancelCallback,
  isVisible,
}: GoalInputProps) => {
  const [currentGoal, setCurrentGoal] = useState("");

  const onGoalChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setCurrentGoal(event.nativeEvent.text);
  };

  const onAddGoal = () => {
    onAddCallback && onAddCallback(currentGoal);
    console.log("added");

    setCurrentGoal("");
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <KeyboardAvoidingView style={styles.input_container} behavior={"height"}>
        <Image
          style={styles.input_image}
          source={require("./../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.input_field}
          placeholder="Enter your goals"
          value={currentGoal}
          onChange={onGoalChange}
        />
        <View style={styles.input_buttons}>
          <Pressable
            style={styles.input_submit}
            onPress={onAddGoal}
            disabled={!currentGoal.length}
          >
            <Text>Add goal</Text>
          </Pressable>

          <Pressable style={styles.input_cancel} onPress={onCancelCallback}>
            <Text style={styles.input_cancel_text}>Cancel</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default GoalInput;
