import GoalInput from "./src/components/GoalInput";
import { useState } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false); // Close the modal after adding the goal
  };

  const cancelGoalInputHandler = () => {
    setIsAddMode(false); // Close the modal when cancel is pressed
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" color="green" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalInputHandler}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,

  },
  listItem: {
    padding: 10,
    backgroundColor: "#f9c2ff",
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 10,
  },
});
