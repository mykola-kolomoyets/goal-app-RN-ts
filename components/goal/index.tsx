import { View, Text, Pressable } from "react-native";

import styles from "./goal.styles";

export type GoalItem = {
  text: string;
  id: string;
  onPress: () => void;
};

const Goal = ({ text, onPress }: GoalItem) => {
  return (
    <View style={styles.goal_item}>
      <Pressable
        style={({ pressed }) => pressed && styles.ios_pressed}
        onPress={onPress}
        android_ripple={styles.android_ripple}
      >
        <View>
          <Text style={styles.goal_item_text}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Goal;
