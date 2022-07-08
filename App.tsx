import { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

import Goal, { GoalItem } from "./components/goal";

import styles from "./app.styles";
import GoalInput from "./components/goal-input";

export default function App() {
  const [goals, setGoals] = useState<Omit<GoalItem, "onPress">[]>([]);

  const onGoalAdd = (goal: string) => {
    setGoals((prev) => [...prev, { id: Math.random().toString(), text: goal }]);
  };

  const onGoalDelete = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const onGoalsClear = () => setGoals([]);

  return (
    <View style={styles.container}>
      <GoalInput onAddCallback={onGoalAdd} />

      <View style={styles.goals_container}>
        {goals.length ? (
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <Goal {...item.item} onPress={() => onGoalDelete(item.item.id)} />
            )}
            alwaysBounceVertical={false}
          />
        ) : (
          <Text>No items</Text>
        )}
      </View>

      <View>
        <Button
          disabled={!goals.length}
          title="Clear goals"
          onPress={onGoalsClear}
        />
      </View>
    </View>
  );
}
