import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ visible, onCancel, onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal(""); // Clear input after adding the goal
    onCancel(); // Close modal
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.GoalInputContainer}>
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.GoalInputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  GoalInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  GoalInputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: "45%",
  },
});
