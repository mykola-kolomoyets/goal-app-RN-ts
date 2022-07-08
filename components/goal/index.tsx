import { View, Text } from "react-native";

export type GoalItem = {
  text: string;
  id: string;
};

const Goal = ({ text }: GoalItem) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Goal;
